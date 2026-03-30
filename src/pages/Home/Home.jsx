import Header from "../../components/header/Header";
import Hero from "../../components/Home/Hero/Hero";
import Expertise from "../../components/Home/Expertise/Expertise";
import ServiceHighlight from "../../components/Home/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../components/Home/TechSlider/TechSlider";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import CtaBanner from "../../components/Home/CtaBanner/CtaBanner";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
        AI & Automation Solutions for Business Growth and Transformation | Infogenx AI-enabled applications, automation, and analytics  
        </title>
        <meta
          name="description"
          content="Infogenx delivers AI-enabled applications,AI, automation, and custom software solutions to help businesses scale faster and Transformation, reduce costs, and improve efficiency."
        />
        <meta
          name="keywords"
          content="AI enabled solutions, automation services, software development company, business automation, digital transformation, IT consulting"
        />   
      </Helmet>
      <Header />
      <Hero />
      <Expertise />
      <ServiceHighlight />
      <TechSlider />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  );
};

export default Home;
