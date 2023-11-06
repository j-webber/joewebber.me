import ProjectList from "../components/ProjectList";

export default function ProjectsScreen() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold slate-900 dark:slate-200">
        A list of (most of) my projects:
      </h1>
      <ol className="list-decimal mt-8 ml-10 flex flex-col space-y-2">
        <ProjectList />
      </ol>
      <p className="mt-8 text-xs">
        * = dead/zombie/unmaintained/never launched
      </p>
    </div>
  );
}
