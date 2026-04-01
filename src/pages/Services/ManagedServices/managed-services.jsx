import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ManagedServices/ManagedServicesHero/ManagedServicesHero";
import AppDevExpertise from "../../../components/Services/ManagedServices/ManagedServicesExpertise/ManagedServicesExpertise";
import AppDevApproach from "../../../components/Services/ManagedServices/ManagedServicesApproach/ManagedServicesApproach";
import AppDevBusinessImpact from "../../../components/Services/ManagedServices/ManagedServicesBusinessImpact/ManagedServicesBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/ManagedServices/ManagedServicesImpactCTA/ManagedServicesImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>Managed IT Services for Scalable Growth | Infogenx</title>
        <meta
          name="description"
          content="Let Infogenx manage your IT operations. From monitoring to maintenance, we keep your systems secure, optimized, and ready to scale."
        />
        <meta
          name="keywords"
          content="managed IT services India, managed services provider India, outsourced IT management, cloud managed services, IT operations support, proactive IT monitoring"
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

export default ApplicationDev;
