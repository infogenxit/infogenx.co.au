import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Platforms/Zoho/ZohoHero/ZohoHero";
import AppDevExpertise from "../../../components/Platforms/Zoho/ZohoExpertise/ZohoExpertise";
import AppDevApproach from "../../../components/Platforms/Zoho/ZohoApproach/ZohoApproach";
import AppDevBusinessImpact from "../../../components/Platforms/Zoho/ZohoBusinessImpact/ZohoBusinessImpact";
// import AppDevImpactCTA from "../../../components/Platforms/Zoho/ZohoImpactCTA/ZohoImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const ZohoSolution = () => {
  return (
    <>
      <SEO
        title="Zoho Consultant Brisbane | Trusted Experts & Agency"
        description="Looking for professional Zoho Consultant Brisbane? Our experts deliver seamless implementation, customization, and automation to scale your business with the Zoho ecosystem."
        keywords="Zoho Consultant Brisbane, Zoho CRM Brisbane, Zoho implementation Australia, Zoho automation experts"
      />
      {/* <Helmet>
        <title>
          Zoho Consulting, Automation & Analytics | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Infogenx helps businesses implement, customize, and optimize Zoho solutions for CRM, automation, analytics, and operational efficiency."
        />
        <meta
          name="keywords"
          content="Zoho consulting Australia, Zoho CRM automation, Zoho Analytics"
        />
      </Helmet> */}
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

export default ZohoSolution;
