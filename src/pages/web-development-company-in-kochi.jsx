import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import Features from "../components/Features";
import CallToAction from "../components/Call-to-action";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LightTheme from "../layouts/Light";
import appData from "../data/app.json";
import Split from "../components/Split";


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
      style={{ backgroundImage: "url(/img/slid/web-development.jpg)" }}
      data-overlay-dark="5">      

      <Navbar nr={navbarRef} lr={logoRef} />
      <AboutHeader  title="WEB DESIGNING KOCHI"  page="web-development-company-in-kochi"/>
      </header>
      <AboutIntro  title="WEB DESIGN & DEVELOPMENT
" content="In the age of data-driven business, only a solid online presence can help you achieve your organizational goals and the edge over your competitors. We are a team of web designers that love taking on challenges! We are ready to work with you to provide alluring and responsive website solutions with the collaboration of our design and development team. We excel at preparing the notes and then working on your needs, to deliver a successful web design. Our expert Kochi team is stocked with the passion, knowledge, and experience needed to get the work done and is assured to deliver a wide range of website design and development services across the world.

The substantial industry experience, the team of web development experts, and the customer-centric approach make us the No.1 web designing company in Kochi. In our web development company, we follow a series of strategic schemes that refine your objectives and target into a methodic, feasible development plan. We deliver the websites according to our client&apos;s requirements and we build them with a suitable programming language or from theme-based websites like WordPress, Wix, etc.

"/>
      <Features/>
<div className="container my-3">
    <div className="row">
    <div className="col-lg-6">
    <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting pb-3"
                  data-splitting
                >
                 Website Designing

                </h3>
              </Split>
        <p className="wow fadeInUp text-justify" data-wow-delay=".4s">Having a high-end website is not enough to attract the audience to it and further to the business. The website should be arresting, appealing, and compelling to make an impact. A well-defined and designed website will give your business a unique identity and will help your business to stand out on the web. We adept web designers and Photoshop experts to conjure a design that addresses your business and target audience with impeccable preciseness. Our web designs render your website dynamic and unrivaled with our affordable, bespoke services. Our professional in-house web designers and developers are brushing up their skills and leveraging the advanced and greatest technologies to help our clients achieve their online sales goals. At Waywedesign, we stay genuine to our ethics that effective website and eCommerce solutions combine a great web design, user experience, cutting-edge technology, and integrated web marketing.</p>
    </div>
    <div className="col-lg-6">
    <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting pb-3"
                  data-splitting
                >
                Web Re-Designing


                </h3>
              </Split>
<p className="wow fadeInUp text-justify" data-wow-delay=".4s">Do you have a prosaic, derivative, spiritless website that doesn&apos;t make your wish true? Fret not, you can still avail of our exemplary services to revamp and refine the outlook of your website. Our design experts could analyze your website, zero in on its issues, and hardwire excellent solutions to upgrade it consuming less time, cost, and effort. Our erudite, committed and responsive designing team will enable your business to yield immense results from the website. We make stunning product/service pages for attracting the audience for conversion. Your business is assured to grow leaps and meet the sales goals once our design goes live.

</p>
    </div>
    </div>
      </div>
     
      <CallToAction theme="light" subBG />
      <Footer />
    </LightTheme>
  );
};

export default GraphicDesign;
