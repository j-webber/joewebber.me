import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto flex flex-col pt-12 pb-64 md:pb-72 px-8 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
