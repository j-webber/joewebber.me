import PostList from "../components/PostList";

export default function DraftsScreen() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold slate-900 dark:slate-200">
        All drafts:
      </h1>
      <ul className="list-disc mt-8 ml-10 flex flex-col space-y-2">
        <PostList drafts={true} />
      </ul>
    </div>
  );
}
