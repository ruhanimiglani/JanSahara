import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>🛡️ JanSahara</h2>
          <p>
            A simple platform connecting people with
            safety and support resources.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/sos">SOS</Link>
          <Link to="/helplines">Emergency Helplines</Link>
          <Link to="/complaint">Anonymous Complaint</Link>
          <Link to="/contacts">Trusted Contacts</Link>
        </div>

        <div>
          <h3>Emergency Numbers</h3>

          <p>112 - Emergency</p>
          <p>100 - Police</p>
          <p>108 - Ambulance</p>
          <p>101 - Fire</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 JanSahara
      </div>

    </footer>
  );
}

export default Footer;