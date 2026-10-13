import PageHeader from "../components/PageHeader";
import { mentalHealthSupport } from "../data/data";

function MentalHealth() {
  return (
    <main className="page">

      <PageHeader
        title="Mental Health"
        description="Mental health support and useful resources."
      />

      <div className="support-intro">

        <div className="large-icon">
          🧠
        </div>

        <div>
          <h2>Your mental health matters</h2>

          <p>
            Find counselling, Tele-MANAS,
            stress relief and support resources <br/>
            <span style={{ color: "#4d98f4", fontWeight: "500" }}>
              Mental health support service : Call 14416
            </span>
          </p>
        </div>

      </div>


      <div className="resource-grid">

        {mentalHealthSupport.map((item, index) => (

          <div className="resource-card" key={index}>

            <div className="resource-icon">
              {item.icon}
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}

export default MentalHealth;