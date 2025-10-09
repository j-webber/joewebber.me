import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCreatePost() {
  const queryclient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (postData) => {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(postData)
      });

      if (!res.ok) {
        throw new Error(res);
      }

      return res.json();
    },
    onSuccess: (post) => {
      queryclient.setQueryData(["post", { slug: post.slug }], post);
      const url = post.published
        ? `/blog/${post.slug}`
        : `/drafts/${post.slug}`;
      navigate(url);
    }
  });
}
