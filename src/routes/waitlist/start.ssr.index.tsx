import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/waitlist/start/ssr/')({
  component: RouteComponent,
})

function RouteComponent() {
   const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await fetch("https://your-api-endpoint/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);
    setSuccess(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">Litelaro</h1>
        <p className="text-gray-400">
          Turn long-form content into viral short clips using your own API key.
        </p>

        {success ? (
          <p className="text-green-400">You're on the waitlist.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 px-4 py-2 rounded bg-gray-900 border border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              disabled={loading}
              className="px-4 py-2 rounded bg-white text-black font-medium"
            >
              {loading ? "..." : "Join"}
            </button>
          </form>
        )}

        <ul className="text-sm text-gray-400 space-y-2">
          <li>• BYO API key (OpenAI, Whisper, ElevenLabs)</li>
          <li>• Desktop-first native experience</li>
          <li>• No subscriptions, usage-based</li>
        </ul>

        <p className="text-xs text-gray-600">
          No spam. Early access only.
        </p>
      </div>
    </main>
  );
}