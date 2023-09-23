import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {ChakraProvider} from "@chakra-ui/react";

import dayjs from "dayjs";
import 'dayjs/locale/zh-cn'; // import locale

dayjs.locale('zh-cn') // use locale

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
