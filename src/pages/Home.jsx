import { Link } from "react-router-dom";
import SupportCard from "../components/SupportCard";

function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <div className="hero-tag">
             One place for support 🤝
          </div>

          <h1>
            Help is closer
            <span> than you think.</span>
          </h1>

          <p>
            JanSahara brings emergency help, safety resources,
            trusted contacts and support services together
            in one simple platform.
          </p>

          <div className="hero-buttons">

            <Link to="/sos" className="btn danger">
              🚨 Emergency SOS
            </Link>

            <Link to="/nearby" className="btn light">
              📍 Find Help Nearby
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <h3>Your safety matters</h3>

          <p>
            Quick access to important support whenever you need it.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="section-title">

          <p>QUICK SUPPORT</p>

          <h2>How can we help?</h2>

          <span>
            Choose a support section to find useful resources.
          </span>

        </div>


        <div className="support-grid">

          <SupportCard
            icon="👩"
            title="Women Support"
            description="Women helplines, legal aid, domestic violence help and safety resources."
            link="/women"
          />

          <SupportCard
            icon="👨"
            title="Men Support"
            description="Emergency support, counselling, legal aid and family resources."
            link="/men"
          />

          <SupportCard
            icon="👶"
            title="Child Support"
            description="Childline, child rights, missing child and abuse support."
            link="/children"
          />

          <SupportCard
            icon="🧠"
            title="Mental Health"
            description="Mental health support, counselling and stress relief resources."
            link="/mental-health"
          />

        </div>

      </section>


      <section className="home-actions">

        <div className="action-banner">

          <div>
            <span>🚨</span>
            <h2>Need help right now?</h2>

            <p>
              Use JanSahara SOS to access emergency options quickly.
            </p>
          </div>

          <Link to="/sos" className="btn danger">
            Open SOS
          </Link>

        </div>


        <div className="action-banner second">

          <div>
            <span>👥</span>
            <h2>Keep trusted people close</h2>

            <p>
              Add trusted contacts for quick calls and messages.
            </p>
          </div>

          <Link to="/contacts" className="btn dark">
            Trusted Contacts
          </Link>

        </div>

      </section>


      <section className="emergency-strip">

        <div>
          <p>EMERGENCY</p>
          <h2>Need immediate assistance?</h2>
        </div>

        <a href="tel:112">
          📞 Call 112
        </a>

      </section>

    </>
  );
}

export default Home;