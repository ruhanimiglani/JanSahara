import PageHeader from "../components/PageHeader";
import { childrenSupport } from "../data/data";
import { Link } from "react-router-dom";

function Children() {

  function getLink(title) {

    if (title === "Child Rights") {
      return "/child-rights";
    }

    if (title === "Missing Child Help") {
      return "/missing-child";
    }

    if (title === "Child Abuse Report") {
      return "/child-abuse";
    }

    if (title === "Child NGOs") {
      return "/child-ngos";
    }

    return null;
  }


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

        {childrenSupport.map((item, index) => {

          const link = getLink(item.title);


          const card = (
            <div
              className="resource-card"
              key={index}
            >

              <div className="resource-icon">
                {item.icon}
              </div>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>


                {item.number && (
                  <span className="display-number">
                    📞 {item.number}
                  </span>
                )}


                {link && (
                  <span className="learn-more">
                    Learn more →
                  </span>
                )}

              </div>

            </div>
          );


          if (link) {

            return (
              <Link
                to={link}
                className="child-rights-link"
                key={index}
              >
                {card}
              </Link>
            );

          }


          return card;

        })}

      </div>

    </main>
  );
}

export default Children;