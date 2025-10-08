import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useState } from "react";
import "./editor.css";
import { useCreatePost } from "../../hooks/usePostMutations";

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

  ["clean"] // remove formatting button
];

export default function Editor() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [quill, setQuill] = useState();

  const createPostMutation = useCreatePost();

  const wrapperRef = useCallback((wrapper) => {
    if (!wrapper) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions
      }
    });
    setQuill(q);
  }, []);

  const createSlug = (input) => {
    return input.replaceAll(" ", "_").toLowerCase();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setSlug(createSlug(e.target.value));
  };

  const handleSlugChange = (e) => {
    setSlug(createSlug(e.target.value));
  };

  const handleClick = (e) => {
    const delta = quill.getContents();

    if (!title || !slug || !delta) {
      console.error("Title, slug and content are required");
      return;
    }

    const postData = {
      title,
      slug,
      content: delta,
      published: e.target.id === "publish"
    };

    createPostMutation.mutate(postData);
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-xl">Title:</h2>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-xl">Slug:</h2>
          <input
            type="text"
            name="slut"
            id="slug"
            value={slug}
            onChange={handleSlugChange}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div id="container" ref={wrapperRef}></div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={handleClick}
          id="draft"
          className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded px-3 py-2 text-sm leading-4 dark:text-slate-300 shadow"
        >
          Save as draft
        </button>
        <button
          onClick={handleClick}
          id="publish"
          className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded px-3 py-2 text-sm leading-4 dark:text-slate-300 shadow"
        >
          Publish
        </button>
      </div>
    </>
  );
}
