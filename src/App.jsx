import { Route, Routes } from "react-router-dom";
import { NavBar } from "./include/header/NavBar";
import Home from "./pages/Home";
import { Footer } from "./include/footer/Footer";
import Shop from "./pages/Shop";
import { useState } from "react";
import SideDrawer from "./components/SideDrawer";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

export default function App() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <NavBar openDrawer={openDrawer} />
      <SideDrawer closeDrawer={closeDrawer} open={open} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
