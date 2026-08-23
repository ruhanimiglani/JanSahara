import PageHeader from "../components/PageHeader";

function MenNGOs() {
  return (
    <main className="page">

      <PageHeader
        title="Men Support Organisations"
        description="Community, counselling, legal and support resources for men and boys."
      />

      <div className="support-intro">

        <div className="large-icon">
          🤝
        </div>

        <div>
          <h2>Finding the right support matters</h2>

          <p>
            Different organisations can help with different
            situations, including mental health, legal concerns,
            abuse, family difficulties and personal challenges.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        <div className="resource-card">

          <div className="resource-icon">
            🧠
          </div>

          <div>
            <h3>Mental Health Organisations</h3>

            <p>
              Counselling centres and mental health organisations
              may provide emotional support and professional guidance.
            </p>

            <small className="feature-message">
              Verified organisation listings will be available in a further version.
            </small>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            ⚖️
          </div>

          <div>
            <h3>Legal Aid & Guidance</h3>

            <p>
              Legal aid services and authorised professionals may
              help people understand their options during family,
              workplace or other legal disputes.
            </p>

            <small className="feature-message">
              Verified legal assistance listings will be available in a further version.
            </small>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🛡️
          </div>

          <div>
            <h3>Abuse & Crisis Support</h3>

            <p>
              Support organisations may assist people dealing with
              abuse, violence, threats or difficult personal situations.
            </p>

            <small className="feature-message">
              Verified support organisations will be available in a further version.
            </small>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🫂
          </div>

          <div>
            <h3>Community Support</h3>

            <p>
              Community groups can help people connect with
              awareness programmes, peer support and other resources.
            </p>

            <small className="feature-message">
              Community listings will be available in a further version.
            </small>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            🏠
          </div>

          <div>
            <h3>Safe Shelter & Temporary Support</h3>

            <p>
              Some situations may require a safe place to stay or
              temporary assistance while longer-term support is arranged.
            </p>

            <small className="feature-message">
              Verified shelter listings will be available in a further version.
            </small>
          </div>

        </div>


        <div className="resource-card">

          <div className="resource-icon">
            📍
          </div>

          <div>
            <h3>Nearby Support</h3>

            <p>
              Find relevant organisations and support services based
              on your location and the type of help you need.
            </p>

            <small className="feature-message">
              Location-based support search will be available in a further version.
            </small>
          </div>

        </div>

      </div>

    </main>
  );
}

export default MenNGOs;