import { Form } from "react-router-dom";
import { useLogin } from "../hooks/useAuthMutations";

export default function LoginScreen() {
  const loginMutation = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const credentials = {
      username: formData.get("username"),
      password: formData.get("password")
    };

    loginMutation.mutate(credentials);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col items-start mx-auto gap-2"
    >
      <label htmlFor="username" className="font-semibold">
        User Name
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="border p-2 rounded"
      />
      <label htmlFor="password" className="font-semibold">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded px-3 py-2 text-sm leading-4 dark:text-slate-300 shadow"
      >
        Login
      </button>
    </Form>
  );
}
