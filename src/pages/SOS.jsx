import { useState } from "react";
import PageHeader from "../components/PageHeader";

function SOS() {
  const [tapCount, setTapCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleTap() {
    const newCount = tapCount + 1;

    setTapCount(newCount);

    if (newCount === 3) {
      setMessage(
        "Triple tap detected! Emergency mode activated."
      );
    }
  }


  return (
    <main className="page">

      <PageHeader
        title="Emergency SOS"
        description="Quick access to emergency support."
      />

      <section className="sos-section">

        <div className="sos-intro">

          <span>⚠️</span>

          <h2>Emergency Mode</h2>

          <p>
            Tap the SOS button three times
            to activate emergency mode.
          </p>

        </div>

        <button
          type="button"
          className={
            tapCount >= 3
              ? "sos-button active"
              : "sos-button"
          }
          onClick={handleTap}
        >

          <span>🚨</span>

          <strong>SOS</strong>

          <small>
            Tap 3 times
          </small>

        </button>

        <p className="tap-text">
          Taps detected: {tapCount}
        </p>
        {message && (
          <div className="sos-message">
            {message}
          </div>
        )}

        <div className="sos-actions">

          <button
            type="button"
            className="sos-action"
          >
            <span>📞</span>

            <div>
              <h3>Emergency Call</h3>

              <p>
                Emergency calling will be added later.
              </p>
            </div>
          </button>

          <button
            type="button"
            className="sos-action"
          >
            <span>📍</span>

            <div>
              <h3>Share Location</h3>

              <p>
                Location sharing will be added later.
              </p>
            </div>
          </button>

          <button
            type="button"
            className="sos-action"
          >
            <span>💬</span>

            <div>
              <h3>Emergency SMS</h3>

              <p>
                SMS sending will be added later.
              </p>
            </div>
          </button>

          <button
            type="button"
            className="sos-action"
          >
            <span>👮</span>

            <div>
              <h3>Police Assistance</h3>

              <p>
                Police calling will be added later.
              </p>
            </div>
          </button>

        </div>

        <div className="info-box">

          <h3>How it works</h3>

          <p>
            JanSahara detects three taps on the
            SOS button and activates emergency mode.
          </p>

          <small>
            Calling, SMS and location services are
            currently disabled in this project version.
          </small>

        </div>

      </section>

    </main>
  );
}

export default SOS;