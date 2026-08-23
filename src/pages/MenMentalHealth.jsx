import PageHeader from "../components/PageHeader";

function MenMentalHealth() {
  return (
    <main className="page">

      <PageHeader
        title="Mental Health & Emotional Support"
        description="Support for men and boys facing emotional, personal or mental health challenges."
      />

      <div className="support-intro">

        <div className="large-icon">
          🧠
        </div>

        <div>
          <h2>Your feelings matter</h2>

          <p>
            You do not have to deal with stress, loneliness,
            emotional pressure or personal problems completely alone.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        <div className="resource-card">

          <div className="resource-icon">
            💭
          </div>

          <div>
            <h3>Emotional Pressure</h3>

            <p>
              Work, studies, family expectations, relationships and
              personal responsibilities can become overwhelming.
              Talking about what you are experiencing can help.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🫂
          </div>

          <div>
            <h3>Loneliness & Isolation</h3>

            <p>
              Feeling alone does not mean you have failed. Consider
              reconnecting with someone you trust or reaching out
              for professional support.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            ❤️
          </div>

          <div>
            <h3>Relationship Difficulties</h3>

            <p>
              Breakups, rejection, conflicts and difficult
              relationships can affect your emotional wellbeing.
              You are allowed to ask for help.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            👨‍⚕️
          </div>

          <div>
            <h3>Professional Support</h3>

            <p>
              A counsellor or mental health professional can provide
              a safe and confidential space to discuss difficult
              thoughts and feelings.
            </p>

            <small className="feature-message">
              Professional counselling resources will be added in a further version.
            </small>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🛑
          </div>

          <div>
            <h3>Unhealthy Coping</h3>

            <p>
              Alcohol, drugs, excessive gaming or risky behaviour
              may sometimes be used to escape difficult feelings.
              Support can help you find healthier ways to cope.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🆘
          </div>

          <div>
            <h3>When Things Feel Overwhelming</h3>

            <p>
              If you feel that you may hurt yourself or someone
              else, move towards a safe environment and seek
              immediate professional or emergency support.
            </p>

            <span className="display-number">
              112
            </span>

            <small className="feature-message">
              Calling feature will be available in a further version.
            </small>
          </div>

        </div>

      </div>

    </main>
  );
}

export default MenMentalHealth;