import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function PostScreen(params) {
  const location = useLocation();
  const { slug } = useParams();
  const { data: user } = useAuthContext();

  const {
    data: post,
    error,
    isPending,
    isError
  } = useQuery({
    queryKey: ["post", { slug: slug }],
    queryFn: async () => {
      const url =
        location.pathname === `/drafts/${slug}`
          ? `/api/admin/posts/${slug}`
          : `/api/posts/${slug}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Unable to fetch post: ${slug}`);
      }

      return res.json();
    }
  });

  useEffect(() => {
    if (!post) return;
    const config = {};

    console.log(post.content.ops);

    const converter = new QuillDeltaToHtmlConverter(post.content.ops, config);

    console.log(typeof converter.convert());

    document.getElementById("post-content").setHTMLUnsafe(converter.convert());
  }, [post]);

  if (isPending) return <span>Loading...</span>;

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-2xl font-semibold slate-900 dark:slate-200">
          {post.title}
        </h1>
        {user && (
          <Link
            to={`${location.pathname}/edit`}
            className={
              "flex gap-1 items-center border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded px-3 py-2 text-sm leading-4 dark:text-slate-300 shadow"
            }
          >
            <HiOutlinePencilAlt />
            Edit
          </Link>
        )}
      </div>
      <div className="mt-8" id="post-content"></div>
    </div>
  );
}
