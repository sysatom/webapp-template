import {createHashRouter} from "react-router-dom";
import App from "./pages/App";
import Error from "./pages/Error";
import Example from "./pages/Example";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

const router = createHashRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "example/:id",
        element: <QueryClientProvider client={queryClient}>
          <Example />
        </QueryClientProvider>,
      }
    ]
  },
]);

export default router;