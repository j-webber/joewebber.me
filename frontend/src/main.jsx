import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProjectsScreen from "./screens/ProjectsScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import analytics from "./analytics.js";
import { AnalyticsProvider } from "use-analytics";
import NotFoundScreen from "./screens/NotFoundScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/projects" element={<ProjectsScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <RouterProvider router={router} />
    </AnalyticsProvider>
  </React.StrictMode>
);
