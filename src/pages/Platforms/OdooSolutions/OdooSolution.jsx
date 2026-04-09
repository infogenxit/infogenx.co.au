import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Platforms/Odoo/OdooHero/OdooHero";
import AppDevExpertise from "../../../components/Platforms/Odoo/OdooExpertise/OdooExpertise";
import AppDevApproach from "../../../components/Platforms/Odoo/OdooApproach/OdooApproach";
import AppDevBusinessImpact from "../../../components/Platforms/Odoo/OdooBusinessImpact/OdooBusinessImpact";
// import AppDevImpactCTA from "../../../components/Platforms/Odoo/OdooImpactCTA/OdooImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const OdooSolution = () => {
  return (
    <>
      <Helmet>
        <title>Odoo ERP Implementation & Customisation | Infogenx</title>
        <meta
          name="description"
          content="Infogenx delivers Odoo ERP implementation, custom modules, and workflow automation to streamline operations and improve business visibility. "
        />
        <meta
          name="keywords"
          content="Odoo ERP Australia, Odoo implementation, ERP automation"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Odoo ERP Implementation & Customisation | Infogenx"
        />
        <meta
          property="og:description"
          content="Infogenx delivers Odoo ERP implementation, custom modules, and workflow automation to streamline operations and improve business visibility."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Odoo ERP Implementation & Customisation | Infogenx"
        />
        <meta
          name="twitter:description"
          content="Infogenx delivers Odoo ERP implementation, custom modules, and workflow automation to streamline operations and improve business visibility."
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

export default OdooSolution;
