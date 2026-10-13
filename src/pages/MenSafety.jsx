import PageHeader from "../components/PageHeader";

function MenSafety() {
  return (
    <main className="page">

      <PageHeader
        title="Safety & Wellbeing Tips"
        description="Practical safety guidance for men and boys in everyday, online and difficult situations."
      />

      <div className="support-intro">

        <div className="large-icon">
          💡
        </div>

        <div>
          <h2>Looking after your safety matters</h2>

          <p>
            Safety is not only about physical danger. Digital
            privacy, relationships, finances and emergency planning
            are important too.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        <div className="resource-card">

          <div className="resource-icon">
            📱
          </div>

          <div>
            <h3>Protect Digital Privacy</h3>

            <p>
              Use strong passwords, enable two-factor authentication
              where possible and avoid sharing sensitive information
              with unknown people.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            ❤️
          </div>

          <div>
            <h3>Notice Unhealthy Behaviour</h3>

            <p>
              Threats, extreme control, constant monitoring,
              manipulation or isolation can be warning signs in
              a relationship.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🚗
          </div>

          <div>
            <h3>Stay Safer While Travelling</h3>

            <p>
              When travelling somewhere unfamiliar, keep your phone
              accessible, know your route and let someone you trust
              know your plans when appropriate.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            💳
          </div>

          <div>
            <h3>Protect Your Finances</h3>

            <p>
              Be careful with online payments and requests for money.
              Never share passwords, OTPs or banking information
              unnecessarily.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            ⚠️
          </div>

          <div>
            <h3>Take Threats Seriously</h3>

            <p>
              If someone threatens, blackmails or repeatedly
              intimidates you, avoid escalating the situation.
              Seek appropriate support.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            👥
          </div>

          <div>
            <h3>Have a Trusted Person</h3>

            <p>
              Keep at least one trusted person informed when you
              are going through a difficult or potentially unsafe
              situation.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            📄
          </div>

          <div>
            <h3>Keep Important Documents Safe</h3>

            <p>
              Keep important identification, financial and legal
              documents secure and avoid sharing them unnecessarily.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🆘
          </div>

          <div>
            <h3>Know Where to Get Help</h3>

            <p>
              Keep emergency contacts accessible and know where
              you can go if you suddenly need a safe place or
              immediate assistance.
            </p>
          </div>

        </div>

      </div>


      <div className="support-intro">

        <div className="large-icon">
          🚨
        </div>

        <div>
          <h2>Immediate danger</h2>

          <p>
            If you are facing an immediate emergency, move towards
            a safer location and contact emergency services or
            someone you trust.
          </p>

          <span className="display-number">
            112
          </span>

          <small className="feature-message">
            Calling feature will be available in a further version.
          </small>
        </div>

      </div>

    </main>
  );
}

export default MenSafety;