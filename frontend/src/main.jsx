import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Realisation from "./pages/Realisation";
import RealisationDetail from "./pages/ReaslisationDetail";
import Contact from "./pages/Contact";
import AddRealisation from "./components/Addrealisation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/realisation",
        element: <Realisation />,
      },
      {
        path: "/realisation/:id",
        element: <RealisationDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/add-realisation", // Ajouter la nouvelle route
        element: <AddRealisation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
