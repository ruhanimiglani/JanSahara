import PageHeader from "../components/PageHeader";

function Women() {
  return (
    <main className="page">

      <PageHeader
        title="Women Support"
        description="Support resources for women and girls."
      />

      <div className="support-intro">

        <div className="large-icon">
          👩
        </div>

        <div>
          <h2>Standing with you</h2>

          <p>
            Find emergency support, domestic violence
            resources, NGOs and safety information.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        {/* Women Helpline */}

        <div className="resource-card">

          <div className="resource-icon">
            📞
          </div>

          <div>
            <h3>Women Helpline</h3>

            <p>
              Support and assistance for women who need help.
            </p>

            <span className="display-number">
              181
            </span>

            <small className="feature-message">
              Calling feature will be available in a further version.
            </small>
          </div>

        </div>


        {/* Women Police Helpline */}

        <div className="resource-card">

          <div className="resource-icon">
            👮
          </div>

          <div>
            <h3>Women Police Helpline</h3>

            <p>
              Women can seek police assistance when facing
              an unsafe situation.
            </p>

            <span className="display-number">
              1091
            </span>

            <small className="feature-message">
              Calling feature will be available in a further version.
            </small>
          </div>

        </div>


        {/* Emergency */}

        <div className="resource-card">

          <div className="resource-icon">
            🚨
          </div>

          <div>
            <h3>Emergency</h3>

            <p>
              Emergency assistance for situations requiring
              immediate attention.
            </p>

            <span className="display-number">
              112
            </span>

            <small className="feature-message">
              Calling feature will be available in a further version.
            </small>
          </div>

        </div>


        {/* Domestic Violence */}

        <a
          href="/women/domestic-violence"
          className="resource-card"
        >

          <div className="resource-icon">
            🛡️
          </div>

          <div>
            <h3>Domestic Violence Help</h3>

            <p>
              Information and support for women facing
              domestic violence.
            </p>

            <span className="resource-arrow">
              View Support →
            </span>
          </div>

        </a>


        {/* Women NGOs */}

        <a
          href="/women/ngos"
          className="resource-card"
        >

          <div className="resource-icon">
            🏢
          </div>

          <div>
            <h3>Nearby Women NGOs</h3>

            <p>
              Information about organisations that support
              women and girls.
            </p>

            <span className="resource-arrow">
              View NGOs →
            </span>
          </div>

        </a>


        {/* Safety Tips */}

        <a
          href="/women/safety-tips"
          className="resource-card"
        >

          <div className="resource-icon">
            💡
          </div>

          <div>
            <h3>Safety Tips</h3>

            <p>
              Simple safety practices for everyday situations
              and unfamiliar surroundings.
            </p>

            <span className="resource-arrow">
              View Safety Tips →
            </span>
          </div>

        </a>

      </div>

    </main>
  );
}

export default Women;