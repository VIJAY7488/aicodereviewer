import { HealthCheck } from "@/components/health-check";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Welcome to the AI Code Reviewer App</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          This app helps you review and improve your code using AI.
        </p>
      </div>

      <div className="flex gap-4">
        <Button asChild >
          <Link href="/login">Login</Link>
        </Button>

        <Button asChild >
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>

      <HealthCheck />
    </div>
  );
}
