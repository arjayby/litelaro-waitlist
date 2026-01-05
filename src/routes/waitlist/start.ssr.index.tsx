import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute('/waitlist/start/ssr/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // TEMP: replace with Convex / API later
    await new Promise((r) => setTimeout(r, 1000))

    setLoading(false)
    setSuccess(true)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
      <Card className="w-full max-w-md bg-zinc-950 border-zinc-800 shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <Badge variant="outline" className="mx-auto w-fit border-zinc-700 text-zinc-400">
            Early Access
          </Badge>

          <CardTitle className="text-3xl font-bold tracking-tight text-white">
            Litelaro
          </CardTitle>

          <p className="text-sm text-zinc-400">
            Turn long-form content into viral short clips.
            <br />
            Bring your own API key. No lock-in.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {success ? (
            <div className="text-center space-y-2">
              <p className="text-green-400 font-medium">
                You’re on the waitlist.
              </p>
              <p className="text-xs text-zinc-500">
                We’ll notify you when early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-zinc-200"
              >
                {loading ? "Joining…" : "Join the Waitlist"}
              </Button>
            </form>
          )}

          <ul className="space-y-2 text-sm text-zinc-400">
            <li>• Desktop-native creator workflow</li>
            <li>• OpenAI, Whisper, ElevenLabs (BYO key)</li>
            <li>• Pay only for what you use</li>
          </ul>

          <p className="text-xs text-zinc-600 text-center">
            No spam. No marketing emails. Early access only.
          </p>
        </CardContent>
      </Card>
    </main>
  )

}