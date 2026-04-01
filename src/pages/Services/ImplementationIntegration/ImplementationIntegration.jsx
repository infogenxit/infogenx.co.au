import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ImplementIntegration/ImplementIntegrationHero/ImplementIntegrationHero";
import AppDevExpertise from "../../../components/Services/ImplementIntegration/ImplementIntegrationExpertise/ImplementIntegrationExpertise";
import AppDevApproach from "../../../components/Services/ImplementIntegration/ImplementIntegrationApproach/ImplementIntegrationApproach";
import AppDevBusinessImpact from "../../../components/Services/ImplementIntegration/ImplementIntegrationBusinessImpact/ImplementIntegrationBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/ImplementIntegration/ImplementIntegrationImpactCTA/ImplementIntegrationImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const ApplicationDev = () => {
  return (
    <>
      <Helmet>
        <title>Implementation & Integration Services | Infogenx</title>
        <meta
          name="description"
          content="Implement and integrate your systems without hassle. Infogenx connects apps, automates workflows, and ensures smooth, reliable data flow."
        />
        <meta
          name="keywords"
          content="software implementation and integration services, ERP implementation India, system integration services, API integration consulting, enterprise software integration, IT implementation partner"
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
