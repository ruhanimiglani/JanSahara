import PageHeader from "../components/PageHeader";

function WomenNGOs() {
  return (
    <main className="page">

      <PageHeader
        title="Women NGOs"
        description="Support organisations and community resources for women."
      />

      <section className="women-detail-page">

        <div className="women-detail-intro">

          <div className="women-detail-icon">
            🤝
          </div>

          <div>

            <span className="women-label">
              COMMUNITY SUPPORT
            </span>

            <h2>
              You are not alone
            </h2>

            <p>
              NGOs and community organisations can connect
              people with support, awareness programmes and
              other helpful resources.
            </p>

          </div>

        </div>


        <div className="women-ngo-grid">

          <div className="women-ngo-card">

            <div className="women-ngo-icon">
              🏢
            </div>

            <div>

              <h3>Women Support Organisations</h3>

              <p>
                Organisations may provide support, awareness,
                counselling and other assistance to women.
              </p>

              <span className="feature-message">
                Nearby NGO search will be available in a further version.
              </span>

            </div>

          </div>


          <div className="women-ngo-card">

            <div className="women-ngo-icon">
              🫂
            </div>

            <div>

              <h3>Community Support</h3>

              <p>
                Community organisations can help connect
                people with appropriate support resources.
              </p>

              <span className="feature-message">
                This feature will be available in a further version.
              </span>

            </div>

          </div>


          <div className="women-ngo-card">

            <div className="women-ngo-icon">
              📍
            </div>

            <div>

              <h3>Nearby Help</h3>

              <p>
                Find women support organisations and
                resources near your location.
              </p>

              <span className="feature-message">
                Location service will be available in a further version.
              </span>

            </div>

          </div>

        </div>


        <div className="women-safety-box">

          <div className="women-safety-icon">
            💙
          </div>

          <div>

            <h2>
              Support starts with reaching out
            </h2>

            <p>
              If you need help, consider talking to someone
              you trust and exploring appropriate support
              resources.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default WomenNGOs;