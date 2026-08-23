import PageHeader from "../components/PageHeader";
import { womenSupport } from "../data/data";

function Women() {
  return (
    <main className="page">

      <PageHeader
        title="Women Support"
        description="Support resources for women and girls."
      />

      <div className="support-intro">

        <div className="large-icon">
          👩
        </div>


        <div>
          <h2>Standing with you</h2>

          <p>
            Find emergency helplines, legal support,
            domestic violence resources and safety information.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        {womenSupport.map((item, index) => (

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

export default Women;