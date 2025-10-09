import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function PostList(params) {
  const { drafts } = params;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", "all", { drafts: drafts }],
    queryFn: async () => {
      const url = drafts ? "/api/admin/posts" : "/api/posts";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error fetching all posts");
      }

      return res.json();
    }
  });

  if (isPending) return <span>Loading...</span>;

  if (isError) return <span>Error: {error.message}</span>;

  return data.map((post) => {
    return (
      <li key={post.id}>
        <Link
          className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
          to={post.slug}
        >
          {post.title}
        </Link>
      </li>
    );
  });
}
