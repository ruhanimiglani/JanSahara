import PageHeader from "../components/PageHeader";

function MenHarassment() {
  return (
    <main className="page">

      <PageHeader
        title="Harassment & Bullying"
        description="Support for men and boys experiencing bullying, harassment, threats or unwanted behaviour."
      />

      <div className="support-intro">

        <div className="large-icon">
          🚫
        </div>

        <div>
          <h2>You do not have to tolerate harassment</h2>

          <p>
            Harassment and bullying can happen at school, college,
            work, online or in personal relationships. Your safety
            and wellbeing matter.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        <div className="resource-card">

          <div className="resource-icon">
            👊
          </div>

          <div>
            <h3>Bullying</h3>

            <p>
              Repeated insults, intimidation, threats, humiliation
              or physical aggression can be bullying. Consider
              speaking to someone you trust.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            💼
          </div>

          <div>
            <h3>Workplace Harassment</h3>

            <p>
              Unwanted behaviour, intimidation, discrimination or
              repeated harassment at work should not be ignored.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            📱
          </div>

          <div>
            <h3>Online Harassment</h3>

            <p>
              Abusive messages, threats, impersonation, cyberbullying
              or unwanted online contact can make digital spaces unsafe.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            ⚠️
          </div>

          <div>
            <h3>Threats & Blackmail</h3>

            <p>
              Threats, coercion or attempts to pressure you using
              private information should be taken seriously.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            👁️
          </div>

          <div>
            <h3>Stalking & Unwanted Contact</h3>

            <p>
              Repeated unwanted calls, messages, following or
              monitoring can be concerning. Seek help if the
              behaviour continues or makes you feel unsafe.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🛑
          </div>

          <div>
            <h3>Sexual Harassment</h3>

            <p>
              Unwanted sexual comments, behaviour, contact or
              pressure are serious concerns. You have the right
              to set boundaries and seek support.
            </p>
          </div>

        </div>

      </div>


      <div className="support-intro">

        <div className="large-icon">
          📋
        </div>

        <div>
          <h2>Keep useful information safe</h2>

          <p>
            Where it is safe to do so, keep relevant messages,
            screenshots, dates, emails or other records. Never
            edit or fabricate evidence.
          </p>
        </div>

      </div>

    </main>
  );
}

export default MenHarassment;