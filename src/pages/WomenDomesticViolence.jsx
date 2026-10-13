import PageHeader from "../components/PageHeader";

function WomenDomesticViolence() {
  return (
    <main className="page">

      <PageHeader
        title="Domestic Violence Help"
        description="Information and support for women facing domestic violence."
      />

      <section className="women-detail-page">

        <div className="women-detail-intro">

          <div className="women-detail-icon">
            🛡️
          </div>

          <div>

            <span className="women-label">
              YOU DESERVE TO BE SAFE
            </span>

            <h2>
              You do not have to face abuse alone
            </h2>

            <p>
              Domestic violence can take different forms,
              including physical, emotional, verbal or
              controlling behaviour. Reaching out for support
              can be an important first step.
            </p>

          </div>

        </div>


        <div className="women-help-grid">

          <div className="women-help-card">

            <div className="women-help-icon">
              🤝
            </div>

            <h3>Talk to Someone You Trust</h3>

            <p>
              Consider speaking with a trusted friend,
              family member, teacher or another person
              who can support you.
            </p>

          </div>


          <div className="women-help-card">

            <div className="women-help-icon">
              🏠
            </div>

            <h3>Find a Safe Place</h3>

            <p>
              If you feel unsafe, try to move towards a
              safe location where you can get support.
            </p>

          </div>


          <div className="women-help-card">

            <div className="women-help-icon">
              📞
            </div>

            <h3>Reach Support Services</h3>

            <p>
              Support services can provide information and
              guidance depending on your situation.
            </p>

            <span className="feature-message">
              Calling feature will be available in a further version.
            </span>

          </div>

        </div>


        <div className="women-safety-box">

          <div className="women-safety-icon">
            💙
          </div>

          <div>

            <h2>
              If you are in immediate danger
            </h2>

            <p>
              Try to move to a safer place and reach out
              to someone you trust or an appropriate
              emergency support service.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default WomenDomesticViolence;