import React from "react";
import AppDevHero from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationHero/IntelligentAutomationHero";
import AppDevExpertise from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationExpertise/IntelligentAutomationExpertise";
import AppDevApproach from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationApproach/IntelligentAutomationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationBusinessImpact/IntelligentAutomationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationImpactCTA/IntelligentAutomationImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";

const IntelligentAutomation = () => {
  const automationContent = [
    {
      heading: "Orchestrating Business Success with Intelligent Automation",
      content: [
        "In the modern Australian business environment, efficiency is the currency of growth. Intelligent Automation (IA) is the catalyst that allows organizations to break free from the constraints of manual, repetitive tasks and focus their human capital on high-value, strategic initiatives. At Infogenx, we specialize in building the 'digital nervous system' for your business, connecting disparate applications and orchestrating complex workflows with AI-driven precision.",
        "Whether you are a logistics provider in Melbourne or a healthcare organization in Sydney, our automation solutions are designed to reduce operational friction, eliminate human error, and provide the scalability needed to handle increasing volumes without increasing headcount."
      ]
    },
    {
      heading: "Beyond Basic RPA: The Infogenx Intelligence Layer",
      content: [
        "While traditional Robotic Process Automation (RPA) handles simple 'if-this-then-that' scenarios, Infogenx introduces an intelligence layer that allows for cognitive decision-making within your workflows."
      ],
      list: [
        { label: "Cognitive Document Processing", text: "Automatically extract, classify, and validate data from invoices, contracts, and IDs using AI-powered OCR, reducing processing times from days to seconds." },
        { label: "Predictive Workflow Triggers", text: "Systems that don't just react to data but predict when intervention is needed, triggering alerts or automated actions before a problem becomes a crisis." },
        { label: "Seamless Ecosystem Integration", text: "We bridge the gap between your CRM, ERP, and communication tools, ensuring data flows naturally across Microsoft 365, Zoho, Odoo, and custom platforms." }
      ]
    },
    {
      heading: "High-Impact Automation Use Cases",
      content: [
        "Every industry has unique challenges, and our automation experts are skilled at identifying the specific areas where IA can provide the greatest return on investment.",
        "In Finance and Accounting, we automate end-to-end accounts payable processes, from invoice receipt to payment reconciliation, ensuring 100% audit accuracy. In Supply Chain and Logistics, we orchestrate real-time inventory updates and automated shipping notifications, improving customer satisfaction and reducing manual tracking.",
        "For Customer Service departments, we deploy intelligent chatbots and automated ticketing systems that handle routine inquiries instantly, leaving your agents to solve complex problems that require empathy and advanced reasoning."
      ]
    },
    {
      heading: "Scaling with Confidence: Governance and Security",
      content: [
        "We understand that as you automate more of your business, security and governance become paramount. Our automation frameworks are built with 'security-by-design' principles, ensuring that every automated agent and workflow operates within your organization’s strict compliance and privacy boundaries.",
        "We provide comprehensive dashboards that allow you to monitor the performance and impact of your automated ecosystem in real-time, giving you total visibility and control over your digital workforce."
      ]
    }
  ];

  const faqData = [
    {
      question: "What is Intelligent Automation?",
      answer: "Intelligent Automation (IA) combines robotic process automation (RPA) with artificial intelligence (AI) and machine learning to automate complex business processes that require decision-making and analysis."
    },
    {
      question: "How can AI-driven workflows help my business?",
      answer: "AI-driven workflows reduce manual errors, accelerate process times, and allow your team to focus on high-value strategic work rather than repetitive data entry or administration."
    },
    {
      question: "Do you provide automation for Microsoft and Zoho?",
      answer: "Yes, we specialize in building intelligent automation solutions specifically for the Microsoft Power Platform, Zoho Flow, and Odoo ecosystems to ensure seamless integration with your existing tools."
    },
    {
      question: "How long does it take to implement an automation solution?",
      answer: "A typical pilot project can be deployed in 4-6 weeks, while more complex enterprise-wide orchestrations may take 3-6 months depending on the systems involved."
    },
    {
      question: "What industries do you serve in Australia?",
      answer: "We serve a wide range of industries including Logistics, Healthcare, Retail, and Professional Services across Brisbane, Sydney, Melbourne, and beyond."
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Intelligent Automation" }
  ];

  return (
    <>
      <SEO
        title="Intelligent Automation & AI Workflows Australia | Infogenx"
        description="Streamline your business with AI-driven intelligent automation in Australia. Infogenx builds scalable workflow solutions for Microsoft, Zoho, and Odoo to reduce manual complexity."
        keywords="intelligent automation Australia, AI workflow orchestration, business process automation"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="AI-Driven Workflow Orchestration & Efficiency" 
        subtitle="Automate to Innovate"
        sections={automationContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqData} />
      <RelatedServices currentService="/solutions/intelligent-automation" />
    </>
  );
};

export default IntelligentAutomation;
