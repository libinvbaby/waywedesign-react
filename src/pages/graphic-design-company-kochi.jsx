import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LightTheme from "../layouts/Light";
import PortfolioCustomColumn from "../components/Portfolio-custom-column";

import appData from '../data/app.json'

const GraphicDesign = (props) => {
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
        logo.setAttribute("src", appData.LightLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
           <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/graphic-banner.jpg)" }}
      data-overlay-dark="5">      

      <Navbar nr={navbarRef} lr={logoRef} />
      <AboutHeader  title="Graphic Designing Company In Kochi
"  page="graphic-design-company-kochi"/>
      </header>
      <AboutIntro  title="Why Graphic Design Is Important?
" content="Being the renowned graphic designing company in Kochi we know creative designing is always challenging as well as an integral part of Digital Marketing. We know they can create the first impression of your company. Being on the ground for so many years, we are trailblazers in graphic design. Thus we take care of delivering the most inspired and highly effective designs for any corporate requirements. Any company whether it is big or startups needs graphical stories to attract clients.
Now just say goodbye to all the hectic graphical work. As a full-service digital marketing agency, We will help you to attract more clients with our Graphical Dynamite method."/>
      <PortfolioCustomColumn subtitle="Graphical Dynamite" title="Creative Designs
"titleDesign="CREATIVE" column={3} filterPosition="center" />
     
      <CallToAction theme="light" subBG />
      <Footer />
    </LightTheme>
  );
};

export default GraphicDesign;
