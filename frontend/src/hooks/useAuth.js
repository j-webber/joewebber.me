import { useQuery } from "@tanstack/react-query";

async function getAuthStatus() {
  const res = await fetch("/api/auth/status", {
    credentials: "include"
  });

  if (res.status === 202) {
    return null; // User not authenticated
  }

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}

export function useAuth() {
  return useQuery({
    queryKey: ["auth", "user"],
    queryFn: getAuthStatus,
    retry: false
  });
}
