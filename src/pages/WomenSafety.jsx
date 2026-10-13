import PageHeader from "../components/PageHeader";

function WomenSafety() {
  return (
    <main className="page">

      <PageHeader
        title="Safety Tips"
        description="Simple practices that can help women stay safer in everyday situations."
      />

      <section className="women-detail-page">

        <div className="women-detail-intro">

          <div className="women-detail-icon">
            💡
          </div>

          <div>

            <span className="women-label">
              STAY SAFE
            </span>

            <h2>
              Small precautions can make a difference
            </h2>

            <p>
              Being aware of your surroundings and knowing
              where to seek help can help you respond better
              during difficult situations.
            </p>

          </div>

        </div>


        <div className="women-tip-grid">

          <div className="women-tip-card">

            <div className="women-tip-icon">
              📱
            </div>

            <h3>Keep Your Phone Ready</h3>

            <p>
              Keep your phone charged and accessible,
              especially when travelling or visiting
              unfamiliar places.
            </p>

          </div>


          <div className="women-tip-card">

            <div className="women-tip-icon">
              👀
            </div>

            <h3>Stay Aware</h3>

            <p>
              Pay attention to your surroundings and
              identify safe public places nearby.
            </p>

          </div>


          <div className="women-tip-card">

            <div className="women-tip-icon">
              👥
            </div>

            <h3>Stay Connected</h3>

            <p>
              Let someone you trust know about your plans
              when going somewhere unfamiliar.
            </p>

          </div>


          <div className="women-tip-card">

            <div className="women-tip-icon">
              🔐
            </div>

            <h3>Protect Personal Information</h3>

            <p>
              Avoid sharing passwords, private details or
              sensitive information with unknown people.
            </p>

          </div>


          <div className="women-tip-card">

            <div className="women-tip-icon">
              🏃‍♀️
            </div>

            <h3>Move Towards Safety</h3>

            <p>
              If you feel unsafe, try to move towards a
              safe and populated place.
            </p>

          </div>


          <div className="women-tip-card">

            <div className="women-tip-icon">
              🆘
            </div>

            <h3>Know Where to Get Help</h3>

            <p>
              Keep important emergency numbers and trusted
              contacts easily accessible.
            </p>

          </div>

        </div>


        <div className="women-safety-box">

          <div className="women-safety-icon">
            🛡️
          </div>

          <div>

            <h2>
              Trust your instincts
            </h2>

            <p>
              If something feels unsafe, take your concerns
              seriously and seek help from someone you trust.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default WomenSafety;