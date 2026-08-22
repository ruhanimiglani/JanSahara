import PageHeader from "../components/PageHeader";

function ChildRights() {
  return (
    <main className="page">

      <PageHeader
        title="Child Rights"
        description="Every child deserves safety, dignity, education and a happy childhood."
      />

      <section className="child-rights-page">

        <div className="rights-intro">
          <div className="rights-main-icon">
            🧒
          </div>

          <div>
            <span className="rights-label">
              KNOW YOUR RIGHTS
            </span>

            <h2>
              Every child has the right to be safe and respected
            </h2>

            <p>
              Children have rights that protect their safety,
              education, health, development and dignity.
              These rights apply to every child.
            </p>
          </div>
        </div>


        <div className="rights-grid">

          <div className="right-card">
            <div className="right-icon">
              🎓
            </div>

            <h3>Right to Education</h3>

            <p>
              Every child should have access to education and
              opportunities to learn, grow and develop their abilities.
            </p>
          </div>


          <div className="right-card">
            <div className="right-icon">
              🛡️
            </div>

            <h3>Right to Protection</h3>

            <p>
              Children should be protected from abuse, violence,
              exploitation, neglect and harmful treatment.
            </p>
          </div>


          <div className="right-card">
            <div className="right-icon">
              🏥
            </div>

            <h3>Right to Health</h3>

            <p>
              Every child deserves proper healthcare, nutrition,
              clean surroundings and support for healthy development.
            </p>
          </div>


          <div className="right-card">
            <div className="right-icon">
              🏠
            </div>

            <h3>Right to Family and Care</h3>

            <p>
              Children should receive care, love and support in
              a safe environment that protects their wellbeing.
            </p>
          </div>


          <div className="right-card">
            <div className="right-icon">
              🗣️
            </div>

            <h3>Right to Be Heard</h3>

            <p>
              Children should have an opportunity to express their
              views and be listened to in matters affecting them.
            </p>
          </div>


          <div className="right-card">
            <div className="right-icon">
              ⚖️
            </div>

            <h3>Right to Equality</h3>

            <p>
              Every child should be treated fairly without
              discrimination based on their background or circumstances.
            </p>
          </div>

        </div>


        <div className="child-safety-box">

          <div className="safety-icon">
            💙
          </div>

          <div>
            <h2>
              If a child is in danger
            </h2>

            <p>
              Tell a trusted adult, teacher, parent, guardian or
              another responsible person. Children should never
              feel that they have to face an unsafe situation alone.
            </p>
          </div>

        </div>


        <div className="rights-note">

          <h3>Remember</h3>

          <p>
            Knowing your rights is an important step towards
            protecting yourself and others. If you notice that
            a child may be unsafe or being harmed, seek help
            from a trusted adult or appropriate support service.
          </p>

        </div>

      </section>

    </main>
  );
}

export default ChildRights;