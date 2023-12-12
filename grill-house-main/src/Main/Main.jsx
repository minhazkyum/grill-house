import { Outlet } from "react-router-dom";
import Navbar from "../Compo/Navbar/Navbar";
import Footer from "../Compo/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
