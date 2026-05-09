import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import InvoiceProvider from './context/InvoiceContext.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoiceProvider>
    <App />
    </InvoiceProvider>
  </React.StrictMode>,
);
