import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Shows from "./pages/Shows";
import CartProvider from "./CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="shows" element={<Shows />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
