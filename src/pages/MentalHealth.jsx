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
            stress relief and support resources.
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

              {item.number && (
                <a href={`tel:${item.number}`}>
                  📞 {item.number}
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}

export default MentalHealth;