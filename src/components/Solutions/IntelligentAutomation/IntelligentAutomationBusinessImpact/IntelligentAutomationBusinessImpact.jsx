import "./IntelligentAutomationBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.png";
import Business2 from "../../../../assets/images/businessimg2.png";
import Business3 from "../../../../assets/images/businessimg3.png";
import Business4 from "../../../../assets/images/businessimg4.png";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        {/* Header */}
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Built for Automation That Performs</h2>
        </div>

        {/* Grid */}
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Intelligent automation impact visual 1" />
            </div>
            <div className="impact-content">
              <h4>Australian-Led, Locally Accountable</h4>
              <p>
                Strategic consulting with local accountability and nationwide delivery.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Intelligent automation impact visual 2" />
            </div>
            <div className="impact-content">
              <h4>Deep Platform Expertise</h4>
              <p>
                Strong experience across Microsoft Power Automate, Zoho Flow, and Odoo automation.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Intelligent automation impact visual 3" />
            </div>
            <div className="impact-content">
              <h4>Security-First by Design</h4>
              <p>
                Automation aligned with governance, risk control, and Australian compliance expectations.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Intelligent automation impact visual 4" />
            </div>
            <div className="impact-content">
              <h4>End-to-End Transformation Thinking</h4>
              <p>
                A comprehensive automation framework built to support enterprise-wide operational improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
