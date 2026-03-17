import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ScrollTopButton from "../components/ScrollTopButton";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Outlet />
      </main>
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default MainLayout;
