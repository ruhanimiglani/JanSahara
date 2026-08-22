import { Link } from "react-router-dom";

function SupportCard({ icon, title, description, link }) {
  return (
    <div className="support-card">

      <div className="support-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <Link to={link}>
        Explore →
      </Link>

    </div>
  );
}

export default SupportCard;