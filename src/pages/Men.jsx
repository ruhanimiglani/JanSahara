import PageHeader from "../components/PageHeader";
import { menSupport } from "../data/data";

function Men() {
  return (
    <main className="page">

      <PageHeader
        title="Men Support"
        description="Support resources for men and families."
      />

      <div className="support-intro">

        <div className="large-icon">
          👨
        </div>

        <div>
          <h2>Support is available</h2>

          <p>
            Find emergency, mental health, legal,
            counselling and NGO resources.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        {menSupport.map((item, index) => (

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

export default Men;