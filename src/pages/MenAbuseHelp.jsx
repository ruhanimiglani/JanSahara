import PageHeader from "../components/PageHeader";

function MenAbuseHelp() {
  return (
    <main className="page">

      <PageHeader
        title="Abuse & Violence Help"
        description="Information and support for men and boys experiencing abuse, violence or controlling behaviour."
      />

      <div className="support-intro">

        <div className="large-icon">
          🛡️
        </div>

        <div>
          <h2>Abuse can happen to anyone</h2>

          <p>
            Men and boys can experience physical, emotional, verbal,
            sexual or financial abuse. You do not have to stay silent
            or face abuse alone.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        <div className="resource-card">

          <div className="resource-icon">
            ✋
          </div>

          <div>
            <h3>Physical Abuse</h3>

            <p>
              Hitting, pushing, kicking, choking or other physical
              harm is not acceptable. If you are in immediate
              danger, move towards a safer place and seek help.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            💬
          </div>

          <div>
            <h3>Emotional & Verbal Abuse</h3>

            <p>
              Repeated insults, humiliation, intimidation, threats
              or behaviour intended to control you can also be
              forms of abuse.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🚫
          </div>

          <div>
            <h3>Sexual Abuse</h3>

            <p>
              Unwanted sexual contact, pressure, coercion or
              behaviour is serious. You have the right to set
              boundaries and seek support.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            💰
          </div>

          <div>
            <h3>Financial Abuse</h3>

            <p>
              Taking control of someone's money, exploiting their
              finances or preventing access to money can be harmful
              and controlling behaviour.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🔒
          </div>

          <div>
            <h3>Controlling Behaviour</h3>

            <p>
              Excessive monitoring, isolation from friends or
              family, threats or manipulation can be warning signs
              of an unhealthy relationship.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            📱
          </div>

          <div>
            <h3>Online Abuse & Threats</h3>

            <p>
              Blackmail, threats, harassment, impersonation or
              sharing private information should be taken seriously.
              Keep evidence when it is safe to do so.
            </p>
          </div>

        </div>

      </div>


      <div className="support-intro">

        <div className="large-icon">
          🚨
        </div>

        <div>
          <h2>If you are in immediate danger</h2>

          <p>
            Move towards a safer location if possible and contact
            emergency services or someone you trust.
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

export default MenAbuseHelp;