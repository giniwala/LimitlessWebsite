"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { ArrowRight, Mail } from "lucide-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const next = searchParams.get("next") || "/portal";
  const setupRequired = searchParams.get("setup") === "required";

  const supabase = useMemo(() => {
    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    return createBrowserClient(supabaseUrl, supabaseAnonKey);
  }, []);

  async function handlePasswordLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (!supabase) {
      setError("Supabase environment variables are not configured yet.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const submittedEmail = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    setIsLoading(true);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: submittedEmail,
      password,
    });

    setIsLoading(false);

    if (loginError) {
      setError(loginError.message);
      return;
    }

    router.push(next);
    router.refresh();
  }

  async function handleMagicLink() {
    setError(null);
    setMessage(null);

    if (!supabase) {
      setError("Supabase environment variables are not configured yet.");
      return;
    }

    if (!email) {
      setError("Enter your email address first.");
      return;
    }

    setIsLoading(true);

    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}${next}`,
      },
    });

    setIsLoading(false);

    if (otpError) {
      setError(otpError.message);
      return;
    }

    setMessage("Check your email for a secure sign-in link.");
  }

  return (
    <div className="w-full min-w-0 rounded-lg border border-border bg-surface p-6 shadow-soft">
      {setupRequired || !supabase ? (
        <div className="mb-5 rounded-md border border-accent/25 bg-surface-muted p-4 text-sm leading-6 text-muted">
          <p>The member portal is ready for Supabase Auth. Add these variables to enable real logins.</p>
          <div className="mt-3 grid gap-2">
            <code className="break-all rounded bg-white px-2 py-1">NEXT_PUBLIC_SUPABASE_URL</code>
            <code className="break-all rounded bg-white px-2 py-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
          </div>
        </div>
      ) : null}

      <form onSubmit={handlePasswordLogin} className="space-y-5">
        <label className="block text-sm font-semibold text-foreground">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
            placeholder="member@msu.edu"
          />
        </label>
        <label className="block text-sm font-semibold text-foreground">
          Password
          <input
            required
            name="password"
            type="password"
            autoComplete="current-password"
            className="mt-2 w-full rounded-md border border-border bg-white px-3 py-3 text-sm font-normal text-foreground"
            placeholder="Your password"
          />
        </label>
        <button
          disabled={isLoading || !supabase}
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand-deep hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{isLoading ? "Signing in..." : "Sign In"}</span>
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </form>

      <div className="mt-4">
        <button
          disabled={isLoading || !supabase}
          type="button"
          onClick={handleMagicLink}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>Email Me a Magic Link</span>
          <Mail aria-hidden className="size-4" />
        </button>
      </div>

      {message ? <p className="mt-4 text-sm text-accent">{message}</p> : null}
      {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
    </div>
  );
}
