import { Route, Routes } from "react-router-dom";
import { NavBar } from "./include/header/NavBar";
import Home from "./pages/Home";
import { Footer } from "./include/footer/Footer";
import Shop from "./pages/Shop";
import { useState } from "react";
import SideDrawer from "./components/SideDrawer";
import SignInLogin from "./components/SignInLogin";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleOpen = () => setOpenDialog(!openDialog);
  return (
    <div>
      <NavBar openDrawer={openDrawer} handleOpen={handleOpen} />
      <SideDrawer closeDrawer={closeDrawer} open={open} />
      <SignInLogin openDialog={openDialog} handleOpen={handleOpen} />
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
