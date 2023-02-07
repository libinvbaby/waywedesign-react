import React from "react";
import FacebookAddTargeting from "../../components/Blog-details/FacebookAdTargeting";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";



const FacebookAdTargeting= () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="cont text-center">
                <h2>Facebook ad targeting options</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FacebookAddTargeting />
      <Footer />
    </LightTheme>
  );
};

export default FacebookAdTargeting;
