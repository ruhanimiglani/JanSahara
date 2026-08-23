import PageHeader from "../components/PageHeader";

function Men() {
  return (
    <main className="page">

      <PageHeader
        title="Men Support"
        description="Support resources for men and boys facing difficult, unsafe or unfair situations."
      />

      <div className="support-intro">

        <div className="large-icon">
          👨
        </div>

        <div>
          <h2>You deserve support too</h2>

          <p>
            Men can experience abuse, harassment, emotional distress,
            family conflict, legal problems and other difficult situations.
            Reaching out for help is a sign of taking care of yourself.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        {/* Emergency */}

        <div className="resource-card">

          <div className="resource-icon">
            🚨
          </div>

          <div>
            <h3>Emergency</h3>

            <p>
              Emergency assistance when you or someone else is
              facing immediate danger.
            </p>

            <span className="display-number">
              112
            </span>

            <small className="feature-message">
              Calling feature will be available in a further version.
            </small>
          </div>

        </div>


        {/* Mental Health */}

        <a
          href="/men/mental-health"
          className="resource-card"
        >

          <div className="resource-icon">
            🧠
          </div>

          <div>
            <h3>Mental Health & Emotional Support</h3>

            <p>
              Support for stress, loneliness, emotional pressure,
              anxiety and difficult personal situations.
            </p>

            <span className="resource-arrow">
              View Support →
            </span>
          </div>

        </a>


        {/* Abuse */}

        <a
          href="/men/abuse-help"
          className="resource-card"
        >

          <div className="resource-icon">
            🛡️
          </div>

          <div>
            <h3>Abuse & Violence Help</h3>

            <p>
              Support for men experiencing physical, emotional,
              verbal, sexual or controlling behaviour.
            </p>

            <span className="resource-arrow">
              View Support →
            </span>
          </div>

        </a>


        {/* Legal */}

        <a
          href="/men/legal-support"
          className="resource-card"
        >

          <div className="resource-icon">
            ⚖️
          </div>

          <div>
            <h3>Legal & Family Support</h3>

            <p>
              Information about legal guidance, family disputes,
              relationship conflicts and other concerns.
            </p>

            <span className="resource-arrow">
              View Support →
            </span>
          </div>

        </a>


        {/* Harassment */}

        <a
          href="/men/harassment"
          className="resource-card"
        >

          <div className="resource-icon">
            🚫
          </div>

          <div>
            <h3>Harassment & Bullying</h3>

            <p>
              Support for bullying, workplace harassment,
              online abuse and unwanted behaviour.
            </p>

            <span className="resource-arrow">
              View Support →
            </span>
          </div>

        </a>


        {/* Organisations */}

        <a
          href="/men/ngos"
          className="resource-card"
        >

          <div className="resource-icon">
            🤝
          </div>

          <div>
            <h3>Support Organisations</h3>

            <p>
              Information about organisations and community
              resources that support men and boys.
            </p>

            <span className="resource-arrow">
              View Organisations →
            </span>
          </div>

        </a>

      </div>

    </main>
  );
}

export default Men;