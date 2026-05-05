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
        <link rel="canonical" href="https://infogenx.com.au" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <title>
          AI Automation & Application Development Company in Australia | Infogenx
        </title>
        <meta
          name="description"
          content="Infogenx is an Australian AI automation and application development company delivering intelligent apps, workflow automation, and analytics."
        />
        <meta
          name="keywords"
          content="AI enabled solutions, automation services, software development company, business automation, digital transformation, IT consulting"
        />
        <meta property="og:url" content="https://infogenx.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Automation & Application Development Company in Australia | Infogenx" />
        <meta property="og:description" content="Infogenx is an Australian AI automation and application development company delivering intelligent apps, workflow automation, and analytics." />
        <meta property="og:image" content="https://infogenx.com.au/infogenx-og-image.png" />
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
