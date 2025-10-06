import { Form } from "react-router-dom";
import { useLogin } from "../hooks/useAuthMutations";

export default function LoginScreen() {
  const loginMutation = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const credentials = {
      username: formData.get("username"),
      password: formData.get("password")
    };

    loginMutation.mutate(credentials);
  };
  return (
    <Form onSubmit={handleSubmit} className="flex flex-col items-start mx-auto">
      <label htmlFor="username">User Name</label>
      <input type="text" name="username" id="username" className="border" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" className="border" />
      <button
        type="submit"
        className="border bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Login
      </button>
    </Form>
  );
}
