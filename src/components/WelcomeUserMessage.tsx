import { useUser } from "@/src/hooks/useUser";

export function WelcomeUserMessage() {
  const { user } = useUser();

  return <div>Welcome, {user?.name || "Guest"}!</div>;
}
