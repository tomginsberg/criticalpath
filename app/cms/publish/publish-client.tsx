'use client';

import { useEffect, useState } from 'react';

interface StatusResponse {
  ok: boolean;
  changedFiles?: string[];
  error?: string;
  message?: string;
}

export default function PublishClient() {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);

  async function loadStatus() {
    const response = await fetch('/api/cms/status');
    const data = await response.json();
    setStatus(data);
  }

  async function publish() {
    setIsPublishing(true);
    try {
      const response = await fetch('/api/cms/publish', {
        method: 'POST',
      });
      const data = await response.json();
      setStatus(data);
    } finally {
      setIsPublishing(false);
    }
  }

  useEffect(() => {
    loadStatus();
  }, []);

  const changedFiles = status?.changedFiles || [];

  return (
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Publish project changes</h1>
      <p className="text-gray-600 mb-8">
        Review local content changes, then push them to main so Vercel can
        deploy the site.
      </p>

      {status?.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 mb-6">
          {status.error}
        </div>
      )}

      {status?.message && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700 mb-6">
          {status.message}
        </div>
      )}

      <section className="rounded-lg border p-4 mb-6">
        <h2 className="font-semibold mb-3">Changed files</h2>
        {changedFiles.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {changedFiles.map((file) => (
              <li key={file}>{file}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">
            No local content changes detected.
          </p>
        )}
      </section>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={loadStatus}
          className="rounded-md border px-4 py-2"
          disabled={isPublishing}
        >
          Refresh status
        </button>
        <button
          type="button"
          onClick={publish}
          className="rounded-md bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
          disabled={isPublishing || changedFiles.length === 0}
        >
          {isPublishing ? 'Publishing...' : 'Deploy changes'}
        </button>
      </div>
    </main>
  );
}
