import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import AuthProvider from "./context/AuthContext.jsx";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import InvoiceProvider from './context/InvoiceContext.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
    <InvoiceProvider>
    <App />
    <ToastContainer
    position='top-right'
    autoClose={3000}
    />
    </InvoiceProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
