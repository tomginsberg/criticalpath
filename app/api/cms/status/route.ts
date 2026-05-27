import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { NextResponse } from 'next/server';

const execFileAsync = promisify(execFile);

function assertPublishEnabled() {
  if (process.env.ENABLE_LOCAL_CMS_PUBLISH !== 'true') {
    throw new Error(
      'Local CMS publishing is disabled. Set ENABLE_LOCAL_CMS_PUBLISH=true.'
    );
  }
}

export async function GET() {
  try {
    assertPublishEnabled();

    const { stdout } = await execFileAsync('git', ['status', '--porcelain'], {
      cwd: process.cwd(),
    });

    const changedFiles = stdout
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    return NextResponse.json({
      ok: true,
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
