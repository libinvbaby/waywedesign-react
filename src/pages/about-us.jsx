import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import Navbar from "../components/Navbar";
import Services4 from "../components/Services4";
import SkillsCircle from "../components/Skills-circle";
import Team1 from "../components/Team1";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import LightTheme from "../layouts/Light";
import appData from '../data/app.json'

const AboutDark = (props) => {
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
        logo.setAttribute("src", appData.darkLogo);
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
      style={{ backgroundImage: "url(/img/slid/about.jpg)" }}
      data-overlay-dark="5" >

      <Navbar nr={navbarRef} lr={logoRef} />
      <AboutHeader title="About Us" page="aboutus" />
      </header>
      <AboutIntro title="Best Digital Marketing Company in Kochi, Kerala
"  content="Waywedesign is reliable digital marketing company in Kochi that refine and upgrade your business by opening the immense possibilities of the internet to you. Our digital marketing professionals possess years of hands-on industry experience. We have served all sized enterprises a prosperous and fruitful results. As a modest, yet extremely ambitious digital marketing company, Waywedesign prides itself in its power to support businesses in a professional and proficient way.
We help you rank your websites and obtaining the advantages as well. You can leave the complex, nail-biting web development, web designing, SEO, SMM, and online advertising responsibilities to us and sit back and enjoy the opulence it brings. Apart from building your digital space, we constantly monitor the performance and trends of your business. We stalk all the alterations and upgrades of the constantly changing trends and incorporate the reformations into your business.

We are a team of experienced and committed web development and Digital Marketing professionals with strong web designing and marketing capabilities that can exquisitely escort your business to the digital world. We can help you conceive, develop, and execute web endeavors that drive high, predictable traffic to your online spaces.

We guarantee the best Return on Investment on the internet through our strategic planning, sublime content, and faultless campaign measurement and optimization.

We don’t alter your requirements and goals to fit into our services; we rather customize our packages and services to fit your objectives and conveniences.
               "/>
      <MinimalArea />
      <Services4 withPadding withOutTitle />
      <VideoWithTestimonials />
      <SkillsCircle subBG theme="light" />
      <Team1 />
      <Clients1 theme="light" />
      <CallToAction theme="light" subBG />
      <Footer />
    </LightTheme>
  );
};

export default AboutDark;
