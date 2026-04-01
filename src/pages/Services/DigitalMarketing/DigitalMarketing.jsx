import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/DigitalMarketing/DigitalMarketingHero/DigitalMarketingHero";
import AppDevExpertise from "../../../components/Services/DigitalMarketing/DigitalMarketingExpertise/DigitalMarketingExpertise";
import AppDevApproach from "../../../components/Services/DigitalMarketing/DigitalMarketingApproach/DigitalMarketingApproach";
import AppDevBusinessImpact from "../../../components/Services/DigitalMarketing/DigitalMarketingBusinessImpact/DigitalMarketingBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/DigitalMarketing/DigitalMarketingImpactCTA/DigitalMarketingImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services to Drive Growth | Infogenx</title>
        <meta
          name="description"
          content="Boost traffic, leads, and sales with Infogenx digital marketing. We deliver SEO, ads, and content strategies that drive measurable growth."
        />
        <meta
          name="keywords"
          content="digital marketing services for business, SEO services India, PPC advertising, social media marketing, content marketing, lead generation services, performance marketing"
        />
      </Helmet>
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

export default DigitalMarketing;
