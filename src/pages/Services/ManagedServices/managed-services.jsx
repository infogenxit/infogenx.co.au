import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/ManagedServices/ManagedServicesHero/ManagedServicesHero";
import AppDevExpertise from "../../../components/Services/ManagedServices/ManagedServicesExpertise/ManagedServicesExpertise";
import AppDevApproach from "../../../components/Services/ManagedServices/ManagedServicesApproach/ManagedServicesApproach";
import AppDevBusinessImpact from "../../../components/Services/ManagedServices/ManagedServicesBusinessImpact/ManagedServicesBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/ManagedServices/ManagedServicesImpactCTA/ManagedServicesImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../components/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../components/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../components/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../components/Common/ServiceDetailedContent/ServiceDetailedContent";

const ManagedServices = () => {
  const managedContent = [
    {
      heading: "Reliable Managed IT Services for Proactive Growth",
      content: [
        "In today’s technology-dependent business landscape, downtime isn’t just an inconvenience—it’s a direct hit to your reputation and revenue. At Infogenx, we provide comprehensive Managed IT Services designed to take the burden of technology management off your shoulders, allowing you to focus on your core business goals. Our proactive approach ensures that your systems are not just 'running,' but optimized for maximum performance, security, and scalability.",
        "From small startups to established enterprises across Australia, our team of dedicated engineers provides 24/7 monitoring and support, acting as an seamless extension of your internal team. We don't wait for things to break; we use advanced telemetry and predictive maintenance to resolve issues before they ever impact your operations."
      ]
    },
    {
      heading: "Our Holistic Managed Services Framework",
      content: [
        "A successful managed services engagement covers every aspect of your technical ecosystem, from infrastructure and security to user support and strategic planning."
      ],
      list: [
        { label: "24/7 Infrastructure Monitoring", text: "We provide round-the-clock visibility into your servers, networks, and cloud environments, ensuring peak performance and immediate response to any anomalies." },
        { label: "Advanced Cybersecurity Management", text: "Protect your business with enterprise-grade security monitoring, threat detection, and proactive patch management for all your critical systems." },
        { label: "SLA-Driven Technical Support", text: "Get access to a dedicated helpdesk with guaranteed response times, ensuring your team stays productive and focused." }
      ]
    },
    {
      heading: "Why Australian Organizations Choose Infogenx",
      content: [
        "Unlike traditional IT providers who profit when your systems fail, our managed services model aligns our success with yours. We thrive when your technology is invisible, silent, and flawlessly efficient. Our local presence in Brisbane and Sydney means we understand the specific compliance and regulatory requirements of the Australian market, including the latest cybersecurity standards and privacy laws.",
        "We provide transparent, fixed-monthly-cost models that allow you to budget your IT spend with total confidence, eliminating the unpredictable expenses associated with the 'break-fix' approach."
      ]
    },
    {
      heading: "Proactive Optimization & Strategic Governance",
      content: [
        "Managed services at Infogenx go beyond simple maintenance. We provide regular performance audits and strategic technology reviews to ensure your infrastructure is evolving in line with your business growth. We help you navigate complex decisions around cloud migration, platform upgrades, and AI integration, ensuring every technology investment provides a measurable return.",
        "With our detailed reporting and performance dashboards, you’ll have total visibility into the health of your digital ecosystem, allowing you to make data-driven decisions about your future technical roadmap."
      ]
    }
  ];
  const relatedItems = [
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with Australian-led digital strategy and engineering.",
      link: "/solutions/digital-transformation"
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Data Analytics & AI",
      description: "Turn your business data into actionable intelligence and strategic decision-support.",
      link: "/solutions/data-analytics-ai"
    }
  ];
  const faqs = [
    {
      question: "What is included in Infogenx Managed IT Services?",
      answer: "Our managed services include 24/7 proactive monitoring, SLA-driven support, system optimization, security management, and regular performance audits for Microsoft, Zoho, and Odoo ecosystems."
    },
    {
      question: "Do you offer 24/7 support for Australian businesses?",
      answer: "Yes, we provide round-the-clock monitoring and support to ensure your critical business applications remain operational and secure at all times."
    },
    {
      question: "How does proactive monitoring help my business?",
      answer: "Proactive monitoring allows us to identify and resolve potential issues before they cause downtime, ensuring uninterrupted productivity and system reliability."
    },
    {
      question: "Can you manage our existing Microsoft or Zoho environment?",
      answer: "Absolutely. Our experts specialize in optimizing and managing existing platform implementations to improve governance, performance, and user adoption."
    },
    {
      question: "What is the typical response time for support requests?",
      answer: "We offer tiered SLA response times based on the severity of the issue, with critical alerts being addressed immediately by our dedicated support team."
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: "/services/managed-services" }
  ];
  return (
    <>
      <SEO
        title="Managed IT Services Australia | Proactive Support & Monitoring | Infogenx"
        description="Maximize uptime and security with Infogenx Managed IT Services in Australia. We provide proactive monitoring, SLA-driven support, and system optimization for Microsoft, Zoho, and Odoo ecosystems."
        keywords="managed IT services Australia, proactive IT support Brisbane, business system monitoring"
      />
      {/* <Helmet>
        <title>
          Managed IT Services & Ongoing Support | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Ensure performance, security, and reliability with Infogenx’s managed services, proactive monitoring, and SLA-driven IT support."
        />
        <meta
          name="keywords"
          content="managed IT services Australia, IT support and maintenance"
        />
      </Helmet> */}
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Proactive IT Management & Strategic Support" 
        subtitle="Uptime Guaranteed"
        sections={managedContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
      <Footer />
    </>
  );
};

export default ManagedServices;
