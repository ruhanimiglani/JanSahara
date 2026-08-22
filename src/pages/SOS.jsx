import { useEffect, useRef, useState } from "react";
import PageHeader from "../components/PageHeader";

function SOS() {

  const [tapCount, setTapCount] = useState(0);
  const [message, setMessage] = useState("");

  const lastTap = useRef(0);


  function handleTap() {

    const currentTime = Date.now();

    if (currentTime - lastTap.current < 700) {
      setTapCount((count) => count + 1);
    } else {
      setTapCount(1);
    }

    lastTap.current = currentTime;
  }


  useEffect(() => {

    if (tapCount >= 3) {
      setMessage(
        "Triple tap detected! Emergency mode activated."
      );
    }

  }, [tapCount]);


  function showComingSoon(feature) {
    setMessage(
      `${feature} will be available in the next version.`
    );
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
            Tap the SOS button three times quickly
            to activate emergency mode.
          </p>
        </div>


        <button
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
            className="sos-action"
            onClick={() =>
              showComingSoon("Emergency calling")
            }
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
            className="sos-action"
            onClick={() =>
              showComingSoon("Location sharing")
            }
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
            className="sos-action"
            onClick={() =>
              showComingSoon("Emergency SMS")
            }
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
            className="sos-action"
            onClick={() =>
              showComingSoon("Police calling")
            }
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
            JanSahara detects three quick taps on the
            SOS button and activates the emergency mode.
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