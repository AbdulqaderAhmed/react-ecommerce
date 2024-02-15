import { Route, Routes } from "react-router-dom";
import { NavBar } from "./include/header/NavBar";
import Home from "./pages/Home";
import { Footer } from "./include/footer/Footer";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
