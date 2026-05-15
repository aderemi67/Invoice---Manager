import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateInvoice from "./pages/CreateInvoice";
import Home from "./pages/Home";
import InvoiceDetails from "./pages/InvoiceDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" 
      element={
        
      <Home />
      
      }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/create" element={
        
        <CreateInvoice />
        
        } />

      <Route path="/edit/:id" element={
        <ProtectedRoute>
        <CreateInvoice />
        </ProtectedRoute>
        } />

      <Route path="/invoice/:id" element={
        <ProtectedRoute>
        <InvoiceDetails />
        </ProtectedRoute>
        } /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;