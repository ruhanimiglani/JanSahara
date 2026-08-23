import PageHeader from "../components/PageHeader";

function MissingChild() {
  return (
    <main className="page">

      <PageHeader
        title="Missing Child Help"
        description="Information and guidance for missing child situations."
      />

      <section className="child-help-page">

        <div className="help-hero missing-hero">

          <div className="help-hero-icon">
            🔎
          </div>

          <div>
            <span className="help-label">
              MISSING CHILD SUPPORT
            </span>

            <h2>
              Every minute matters
            </h2>

            <p>
              If a child is missing, stay calm and seek help
              from responsible adults and appropriate authorities
              as quickly as possible.
            </p>
          </div>

        </div>


        <div className="help-grid">

          <div className="help-card">
            <div className="help-card-icon">
              👮
            </div>

            <h3>Inform the authorities</h3>

            <p>
              Report the missing child situation to the
              appropriate police or child protection authorities.
            </p>
          </div>


          <div className="help-card">
            <div className="help-card-icon">
              👨‍👩‍👧
            </div>

            <h3>Tell a trusted adult</h3>

            <p>
              Parents, guardians, teachers or another trusted
              adult can help coordinate the next steps.
            </p>
          </div>


          <div className="help-card">
            <div className="help-card-icon">
              📝
            </div>

            <h3>Keep important details ready</h3>

            <p>
              Keep recent photographs and useful information
              about the child available when reporting the case.
            </p>
          </div>


          <div className="help-card">
            <div className="help-card-icon">
              📍
            </div>

            <h3>Remember recent locations</h3>

            <p>
              Think about places the child may have visited
              recently and share useful information with adults
              helping with the situation.
            </p>
          </div>

        </div>


        <div className="important-box">

          <span>⚠️</span>

          <div>
            <h3>Important</h3>

            <p>
              Do not put yourself in danger while searching.
              Ask responsible adults and authorities for help.
            </p>
          </div>

        </div>


        <div className="coming-feature">

          <h3>JanSahara Support Tools</h3>

          <p>
            Future versions of JanSahara can provide nearby
            support centres, location-based assistance and
            additional reporting features.
          </p>

          <span>
            Feature development in progress
          </span>

        </div>

      </section>

    </main>
  );
}

export default MissingChild;