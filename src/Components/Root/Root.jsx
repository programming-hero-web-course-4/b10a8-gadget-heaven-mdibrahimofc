import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  );
};

export default Root;
