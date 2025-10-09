import { useParams } from "react-router-dom";
import Editor from "../components/editor/Editor";
import { useQueryClient } from "@tanstack/react-query";

export default function EditScreen() {
  const { slug } = useParams();
  const queryClient = useQueryClient();

  return (
    <Editor postData={queryClient.getQueryData(["post", { slug: slug }])} />
  );
}
