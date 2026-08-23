import { useState } from "react";
import PageHeader from "../components/PageHeader";

function ChildAbuse() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page">

      <PageHeader
        title="Child Abuse Report"
        description="Learn how to respond to and report concerns about child safety."
      />

      <section className="child-help-page">

        <div className="help-hero abuse-hero">

          <div className="help-hero-icon">
            🛡️
          </div>

          <div>
            <span className="help-label">
              CHILD SAFETY
            </span>

            <h2>
              Every child deserves protection
            </h2>

            <p>
              If you are worried that a child may be experiencing
              abuse or harm, seek help from a trusted adult or
              appropriate support service.
            </p>
          </div>

        </div>


        <div className="help-grid">

          <div className="help-card">
            <div className="help-card-icon">
              👂
            </div>

            <h3>Listen and support</h3>

            <p>
              Listen calmly and take concerns seriously.
              Avoid blaming or frightening the child.
            </p>
          </div>


          <div className="help-card">
            <div className="help-card-icon">
              👨‍🏫
            </div>

            <h3>Tell a trusted adult</h3>

            <p>
              A parent, guardian, teacher or another responsible
              adult can help take appropriate action.
            </p>
          </div>


          <div className="help-card">
            <div className="help-card-icon">
              📝
            </div>

            <h3>Record important information</h3>

            <p>
              Write down relevant details that may help when
              reporting a concern. Avoid investigating the situation
              yourself.
            </p>
          </div>


          <div className="help-card">
            <div className="help-card-icon">
              ⚖️
            </div>

            <h3>Seek appropriate help</h3>

            <p>
              Child protection and law enforcement authorities
              can guide you through the reporting process.
            </p>
          </div>

        </div>


        <div className="report-section">

          <div className="report-heading">

            <span>📝</span>

            <div>
              <h2>Report a Concern</h2>

              <p>
                This is a demo form for the JanSahara project.
                It does not send a real report.
              </p>
            </div>

          </div>


          {submitted ? (

            <div className="success-box">

              <div>
                ✅
              </div>

              <div>
                <h3>Demo report submitted</h3>

                <p>
                  Your information has been recorded only
                  for this demonstration.
                </p>
              </div>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              <label>
                Your name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
              />


              <label>
                What is your concern?
              </label>

              <textarea
                placeholder="Describe the concern..."
                rows="5"
              ></textarea>


              <label>
                Additional information
              </label>

              <textarea
                placeholder="Any other useful information..."
                rows="4"
              ></textarea>


              <button
                type="submit"
                className="btn dark"
              >
                Submit Demo Report
              </button>

            </form>

          )}

        </div>


        <div className="important-box">

          <span>💙</span>

          <div>

            <h3>Remember</h3>

            <p>
              A child should never be blamed for abuse.
              If someone is in immediate danger, seek
              appropriate emergency assistance.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ChildAbuse;