import {createRoot} from "react-dom/client";
import { App } from './App';
import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginLazy} from "@/pages/login/Login.lazy";
import {Registration} from "@/pages/registration";

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Suspense fallback={'Loading...'}><LoginLazy /></Suspense>
      },
      {
        path: '/registration',
        element: <Suspense fallback={'Loading...'}><Registration /></Suspense>
      }
    ]}
])

container.render(<RouterProvider router={router} />);
