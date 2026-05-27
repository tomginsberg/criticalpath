import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { NextResponse } from 'next/server';

const execFileAsync = promisify(execFile);

const ALLOWED_PATH_PREFIXES = ['content/projects/', 'public/projects/'];

function assertPublishEnabled() {
  if (process.env.ENABLE_LOCAL_CMS_PUBLISH !== 'true') {
    throw new Error(
      'Local CMS publishing is disabled. Set ENABLE_LOCAL_CMS_PUBLISH=true.'
    );
  }
}

async function git(args: string[]) {
  const result = await execFileAsync('git', args, {
    cwd: process.cwd(),
  });

  return result.stdout.trim();
}

async function getChangedFiles() {
  const status = await git(['status', '--porcelain']);

  return status
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.slice(3));
}

function assertOnlyContentChanges(files: string[]) {
  const unsafe = files.filter((file) => {
    return !ALLOWED_PATH_PREFIXES.some((prefix) => file.startsWith(prefix));
  });

  if (unsafe.length > 0) {
    throw new Error(
      `Refusing to publish because non-content files changed: ${unsafe.join(', ')}`
    );
  }
}

export async function POST() {
  try {
    assertPublishEnabled();

    const changedFiles = await getChangedFiles();

    if (changedFiles.length === 0) {
      return NextResponse.json({
        ok: true,
        message: 'No changes to publish.',
      });
    }

    assertOnlyContentChanges(changedFiles);

    await git(['add', 'content/projects', 'public/projects']);

    try {
      await git(['diff', '--cached', '--quiet']);
      return NextResponse.json({
        ok: true,
        message: 'No staged changes to publish.',
      });
    } catch {
      // diff --quiet exits non-zero when there are staged changes — continue.
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await git(['commit', '-m', `Update project content ${timestamp}`]);
    await git(['push', 'origin', 'HEAD:main']);

    return NextResponse.json({
      ok: true,
      message: 'Changes pushed to main. Vercel should start a new deployment.',
      changedFiles,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
