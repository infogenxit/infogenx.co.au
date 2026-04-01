import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ConsultingAdvisory/ConsultingHero/ConsultingHero";
import AppDevExpertise from "../../../components/Services/ConsultingAdvisory/ConsultingExpertise/ConsultingExpertise";
import AppDevApproach from "../../../components/Services/ConsultingAdvisory/ConsultingAppDev/ConsultingAppDev";
import AppDevBusinessImpact from "../../../components/Services/ConsultingAdvisory/ConsultingBusinessImpact/ConsultingBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>IT Consulting & Advisory Services for Growth | Infogenx</title>
        <meta
          name="description"
          content="Make smarter tech decisions with Infogenx consulting. We create clear roadmaps, reduce risks, and align technology with your business goals."
        />
        <meta
          name="keywords"
          content="IT consulting and advisory services India, technology strategy consulting, digital advisory services, business technology roadmap, IT consultant India, CTO advisory services"
        />
      </Helmet>
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      {/* <AppDevImpactCTA /> */}
      <Footer />
    </>
  );
};

export default ApplicationDev;
