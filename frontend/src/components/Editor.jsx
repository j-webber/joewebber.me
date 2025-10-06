import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback } from "react";

export default function Editor() {
  const wrapperRef = useCallback((wrapper) => {
    if (!wrapper) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, {
      theme: "snow"
    });
  }, []);

  return <div id="container" ref={wrapperRef}></div>;
}
