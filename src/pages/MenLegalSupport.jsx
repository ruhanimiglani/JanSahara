import PageHeader from "../components/PageHeader";

function MenLegalSupport() {
  return (
    <main className="page">

      <PageHeader
        title="Legal & Family Support"
        description="Information to help men understand legal, family and relationship-related concerns."
      />

      <div className="support-intro">

        <div className="large-icon">
          ⚖️
        </div>

        <div>
          <h2>Know your options</h2>

          <p>
            Legal and family disputes can be stressful and confusing.
            Getting appropriate professional guidance can help you
            understand your options.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        <div className="resource-card">

          <div className="resource-icon">
            👨‍👩‍👦
          </div>

          <div>
            <h3>Family Disputes</h3>

            <p>
              Family conflicts, separation and disagreements can
              become difficult to manage. Appropriate legal or
              counselling support may help.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            💬
          </div>

          <div>
            <h3>Relationship Conflicts</h3>

            <p>
              Difficult relationships may involve disputes, threats,
              manipulation or other serious concerns. Professional
              guidance can help identify appropriate next steps.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            👶
          </div>

          <div>
            <h3>Child & Family Matters</h3>

            <p>
              Parenting arrangements, family responsibilities and
              child-related disputes may require situation-specific
              legal advice.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            💼
          </div>

          <div>
            <h3>Workplace Concerns</h3>

            <p>
              Men can also experience workplace harassment,
              discrimination, threats or unfair treatment. Keep
              relevant records and explore appropriate channels.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            📄
          </div>

          <div>
            <h3>Legal Allegations & Disputes</h3>

            <p>
              If you are involved in an allegation or legal complaint,
              avoid making assumptions about the outcome. Seek
              qualified legal advice.
            </p>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🗂️
          </div>

          <div>
            <h3>Keep Important Records</h3>

            <p>
              Where safe and appropriate, keep copies of relevant
              messages, documents, dates and other information
              connected to a dispute. Never fabricate evidence.
            </p>
          </div>

        </div>

      </div>


      <div className="support-intro">

        <div className="large-icon">
          🧑‍⚖️
        </div>

        <div>
          <h2>Get advice specific to your situation</h2>

          <p>
            Laws and legal procedures can vary depending on the
            situation. A qualified lawyer or authorised legal
            assistance service can explain applicable rights,
            responsibilities and options.
          </p>

          <small className="feature-message">
            Verified legal assistance resources will be added in a further version.
          </small>
        </div>

      </div>

    </main>
  );
}

export default MenLegalSupport;