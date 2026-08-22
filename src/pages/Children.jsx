import PageHeader from "../components/PageHeader";
import { childrenSupport } from "../data/data";

function Children() {
  return (
    <main className="page">

      <PageHeader
        title="Child Support"
        description="Protection, safety and support resources for children."
      />

      <div className="support-intro">

        <div className="large-icon">
          👶
        </div>

        <div>
          <h2>Every child deserves safety</h2>

          <p>
            Access child protection, Childline,
            missing child and child rights resources.
          </p>
        </div>

      </div>


      <div className="resource-grid">

        {childrenSupport.map((item, index) => (

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

export default Children;