import { Outlet } from "react-router-dom";
import Navigation from "../components/Nav";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";



export default function Layout(){
    const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
    return(
        <>
         <Navigation></Navigation>
         <ScrollToTop></ScrollToTop>
         <ToastContainer></ToastContainer>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
    )
}