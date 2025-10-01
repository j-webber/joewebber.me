import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProjectsScreen from "./screens/ProjectsScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import analytics from "./analytics.js";
import { AnalyticsProvider } from "use-analytics";
import NotFoundScreen from "./screens/NotFoundScreen.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/authContext.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NewScreen from "./screens/NewScreen.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10
    }
  }
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/projects" element={<ProjectsScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/new" element={<NewScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </AnalyticsProvider>
  </React.StrictMode>
);
