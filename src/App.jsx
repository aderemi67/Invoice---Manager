import { fromJSON } from "postcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateInvoice />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;