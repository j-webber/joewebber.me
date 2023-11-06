import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAnalytics } from "use-analytics";
import { useEffect } from "react";

export default function App() {
  let location = useLocation();
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.page();
  }, [location]);

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
