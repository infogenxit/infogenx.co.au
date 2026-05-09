import AppDevHero from "../../../sections/Solutions/ApiIntegration/ApiIntegrationHero/ApiIntegrationHero";
import AppDevExpertise from "../../../sections/Solutions/ApiIntegration/ApiIntegrationExpertise/ApiIntegrationExpertise";
import AppDevApproach from "../../../sections/Solutions/ApiIntegration/ApiIntegrationApproach/ApiIntegrationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/ApiIntegration/ApiIntegrationBusinessImpact/ApiIntegrationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/ApiIntegration/ApiIntegrationImpactCTA/ApiIntegrationImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";

const ApiIntegration = () => {
  const apiContent = [
    {
      heading: "Bridging the Gap: The Strategic Value of API Integration",
      content: [
        "In the modern enterprise, data siloed in separate applications is data wasted. API (Application Programming Interface) integration is the bridge that connects your various software platforms, allowing them to speak a common language and share critical business intelligence in real-time. At Infogenx, we specialize in building these secure, high-performance bridges, transforming fragmented technical stacks into cohesive, automated ecosystems.",
        "Whether you are looking to sync your CRM with your accounting software, connect your e-commerce storefront with a logistics provider, or build a custom interface for a legacy system, our integration services ensure that your data moves accurately and securely across your organization."
      ]
    },
    {
      heading: "Creating a Unified Technical Ecosystem",
      content: [
        "A truly integrated business enjoys greater visibility, reduced manual overhead, and faster decision-making capabilities. We focus on creating a 'single source of truth' for your data."
      ],
      list: [
        { label: "Real-Time Data Synchronization", text: "Ensure that a customer update in one system is instantly reflected across all platforms, from marketing to billing." },
        { label: "Elimination of Manual Entry", text: "Automate the flow of data between systems, reducing human error and freeing up your team for more strategic work." },
        { label: "Enhanced Customer Experience", text: "By connecting your customer touchpoints, you provide a seamless, unified experience that builds trust and loyalty." }
      ]
    },
    {
      heading: "Custom Connector Engineering: Beyond Standard Plugins",
      content: [
        "While many platforms offer standard plugins, these often fall short of meeting complex, enterprise-level requirements. Infogenx engineers custom API connectors tailored specifically to your unique business logic and data structures.",
        "We have deep expertise in integrating with industry leaders like Microsoft (Dynamics, Azure), Zoho (CRM, Analytics), and Odoo, as well as building proprietary gateways for specialized industry tools. Our custom approach ensures that you are not limited by the features of a third-party plugin, but empowered by an integration that fits your business like a glove."
      ]
    },
    {
      heading: "Security and Integrity in Data Exchange",
      content: [
        "When data moves between systems, security is our top priority. We implement advanced encryption protocols (TLS/SSL), robust authentication mechanisms (OAuth2, API Keys), and secure gateway management to protect your information at every stage of the transfer.",
        "Furthermore, our integration solutions include built-in error handling and logging, ensuring that any communication failure is instantly detected and resolved without data loss or corruption. We build systems that are as resilient as they are connected."
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: "/solutions/digital-transformation" },
    { name: "API Integration", path: "/solutions/api-integration" }
  ];

  const faqs = [
    {
      question: "What is API Integration and why do I need it?",
      answer: "API integration allows different software systems to communicate and share data automatically. It's essential for eliminating manual data entry and creating a unified business ecosystem."
    },
    {
      question: "Can you connect our custom software with standard platforms like Zoho?",
      answer: "Yes, we specialize in building custom API connectors that link your proprietary systems with third-party platforms like Zoho, Microsoft, and Odoo."
    },
    {
      question: "How do you ensure data security during API transfers?",
      answer: "We use OAuth2 authentication, encrypted data transmission (HTTPS), and secure API gateways to ensure your business data remains protected at all times."
    },
    {
      question: "Do you provide API documentation for the integrations you build?",
      answer: "Absolutely. We provide comprehensive documentation for every custom API we develop, making it easy for your internal teams to manage and scale."
    },
    {
      question: "What is an API-first approach?",
      answer: "An API-first approach means we design the communication interface before building the application, ensuring maximum flexibility and connectivity for future growth."
    }
  ];

  const relatedItems = [
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with global digital strategy and engineering.",
      link: "/solutions/digital-transformation"
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Modern Applications",
      description: "Build scalable, cloud-native applications tailored to your business objectives.",
      link: "/solutions/modern-applications"
    }
  ];
  return (
    <>
      <SEO
        title="API Integration Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading API Integration Brisbane services. Our expert agency delivers seamless technical connectivity and data automation to streamline your business workflows."
        keywords="API Integration Brisbane, system integration Brisbane, data automation Australia, custom API connectors"
      />
      {/* <Helmet>
        <title>System Integration & API Enablement Services | Infogenx</title>
        <meta
          name="description"
          content="Infogenx delivers seamless system integration and API-first solutions that connect platforms, automate data flow, and improve operational efficiency. "
        />
        <meta
          name="keywords"
          content="system integration services, API integration Australia, enterprise integration"
        />
      </Helmet> */}
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Seamless Connectivity & Technical Enablement" 
        subtitle="Connect Your Ecosystem"
        sections={apiContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default ApiIntegration;
