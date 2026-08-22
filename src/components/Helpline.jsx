import { useState } from "react";

function Helpline({ icon, name, number, description }) {

  const [message, setMessage] = useState("");

  function handleCall() {
    setMessage("Calling feature will be available soon.");
  }

  return (
    <div className="helpline-card">

      <div className="helpline-icon">
        {icon}
      </div>

      <div className="helpline-info">
        <h3>{name}</h3>

        <p>{description}</p>

        <strong>{number}</strong>

        {message && (
          <small className="feature-message">
            {message}
          </small>
        )}
      </div>

      <button
        className="call-button"
        onClick={handleCall}
      >
        📞 Call
      </button>

    </div>
  );
}

export default Helpline;