import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createHashRouter} from "react-router-dom";
import App from "./pages/App";
import Error from "./pages/Error";
import Example from "./pages/Example";
import MyForm from "./pages/Form";
import Day from "./pages/Day";

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
        path: "form",
        element: <MyForm />,
      },
      {
        path: "day",
        element: <Day />,
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