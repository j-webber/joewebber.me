import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryclient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials) => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials)
      });

      if (!res.ok) {
        throw new Error("Incorrect username or password");
      }

      return res.json();
    },
    onSuccess: (user) => {
      queryclient.setQueryData(["auth", "user"], user);
      navigate("/new");
    }
  });
}

export function useLogout() {
  const queryclient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include"
      });
    },
    onSuccess: () => {
      queryclient.setQueryData(["auth", "user"], null);
      queryclient.clear();
      navigate("/login");
    }
  });
}
