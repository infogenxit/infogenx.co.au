import WebDevHero from "../../../sections/Technologies/CloudComputing/CloudComputingHero/CloudComputingHero";
import WebDevTech from "../../../sections/Technologies/CloudComputing/CloudComputingTech/CloudComputingTech";
import WebDevExpertise from "../../../sections/Technologies/CloudComputing/CloudComputingExperties/CloudComputingExpertise";
import WebDevOutcomes from "../../../sections/Technologies/CloudComputing/CloudComputingOutcomes/CloudComputingOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/CloudComputing/CloudComputingImpactCTA/CloudComputingImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";

const CloudComputing = () => {
  return (
    <>
      <SEO
        title="Cloud Computing Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading Cloud Computing Brisbane services. Our expert agency delivers secure cloud migrations, managed infrastructure, and serverless architectures to empower your business."
        keywords="Cloud Computing Brisbane, cloud migration Brisbane, AWS Azure Brisbane, cloud infrastructure Australia"
      />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <WebDevOutcomes />
      <WebDevImpactCTA />
    </>
  );
};

export default CloudComputing;
