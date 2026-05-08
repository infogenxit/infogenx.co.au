import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Industries/Manufacturing/ManufacturingHero/ManufacturingHero";
import AppDevExpertise from "../../../components/Industries/Manufacturing/ManufacturingExpertise/ManufacturingExpertise";
import AppDevApproach from "../../../components/Industries/Manufacturing/ManufacturingApproach/ManufacturingApproach";
import AppDevBusinessImpact from "../../../components/Industries/Manufacturing/ManufacturingBusinessImpact/ManufacturingBusinessImpact";
import AppDevImpactCTA from "../../../components/Industries/Manufacturing/ManufacturingImpactCTA/ManufacturingImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const Manufacturing = () => {
  return (
    <>
      <SEO
        title="Manufacturing IT Solutions Brisbane | Trusted Experts"
        description="Scale your company with leading Manufacturing IT Solutions in Brisbane. Our expert team delivers predictive maintenance, supply chain automation, and data-driven production optimization."
        keywords="Manufacturing IT Solutions Brisbane, industrial technology Brisbane, smart manufacturing Australia, supply chain automation"
      />
      {/* <Helmet>
        <title>AI in Manufacturing Australia | InfogenX Australia</title>
        <meta
          name="description"
          content="Intelligent automation for Australian manufacturers by InfogenX: predictive maintenance, supply chain AI & analytics consulting for efficiency gains."
        />
        <meta
          name="keywords"
          content="intelligent automation manufacturing, digital transformation manufacturing Australia, AI-enabled production solutions, predictive maintenance automation Australia, supply chain AI consulting"
        />
      </Helmet> */}
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default Manufacturing;
