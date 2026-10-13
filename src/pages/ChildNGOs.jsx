import PageHeader from "../components/PageHeader";

function ChildNGOs() {
<<<<<<< HEAD
=======

>>>>>>> origin/main
  const organizations = [
    {
      icon: "🏠",
      name: "Child Protection Organisations",
      description:
        "Organisations working to improve child safety, protection and wellbeing.",
<<<<<<< HEAD
      area: "Child Protection",
      link: "https://www.ncpcr.gov.in/",
=======
      area: "Child Protection"
>>>>>>> origin/main
    },
    {
      icon: "🎓",
      name: "Education Support Organisations",
      description:
        "Groups that support children's education, learning and development.",
<<<<<<< HEAD
      area: "Education",
      link: "https://www.unicef.org/india/",
=======
      area: "Education"
>>>>>>> origin/main
    },
    {
      icon: "🛡️",
      name: "Child Safety Organisations",
      description:
        "Organisations working towards safer environments for children.",
<<<<<<< HEAD
      area: "Safety",
      link: "https://www.childlineindia.org/",
=======
      area: "Safety"
>>>>>>> origin/main
    },
    {
      icon: "💙",
      name: "Child Welfare Organisations",
      description:
        "Groups that provide support and assistance for children's welfare.",
<<<<<<< HEAD
      area: "Child Welfare",
      link: "https://www.unicef.org/india/",
    },
  ];



=======
      area: "Child Welfare"
    }
  ];


>>>>>>> origin/main
  return (
    <main className="page">

      <PageHeader
        title="Child NGOs"
        description="Explore organisations and support areas focused on children's wellbeing."
      />

<<<<<<< HEAD
=======

>>>>>>> origin/main
      <section className="child-help-page">

        <div className="help-hero ngo-hero">

          <div className="help-hero-icon">
            🤝
          </div>

          <div>
            <span className="help-label">
              CHILD SUPPORT NETWORK
            </span>

            <h2>
              Support for every child
            </h2>

            <p>
              NGOs and community organisations can play an
              important role in supporting children, families
              and communities.
            </p>
          </div>

        </div>

<<<<<<< HEAD
        {/* NGO */}
=======

>>>>>>> origin/main
        <div className="ngo-grid">

          {organizations.map((organization, index) => (

            <div
              className="ngo-card"
              key={index}
            >

              <div className="ngo-icon">
                {organization.icon}
              </div>

              <span className="ngo-area">
                {organization.area}
              </span>

              <h3>
                {organization.name}
              </h3>

              <p>
                {organization.description}
              </p>

<<<<<<< HEAD
              {/* <button
                type="button"
                className="ngo-button"
                onClick={() =>
                  handleSupport(organization.link)
                }
              >
                View Support →
              </button> */}
=======
              <button
                className="ngo-button"
                onClick={() =>
                  alert(
                    "NGO directory feature will be available in the next version."
                  )
                }
              >
                View Support →
              </button>
>>>>>>> origin/main

            </div>

          ))}

        </div>

<<<<<<< HEAD
        {/* Nearby NGO Section */}
        <div className="coming-feature">

          <h3>
            Nearby NGO Directory
          </h3>
=======

        <div className="coming-feature">

          <h3>Nearby NGO Directory</h3>
>>>>>>> origin/main

          <p>
            JanSahara can later include a directory of verified
            child support organisations and nearby services.
          </p>

          <span>
            Location services are currently disabled
          </span>

        </div>

<<<<<<< HEAD
        {/* Important Support Section */}
        <div className="child-support-info">

          <h3>
            Need Immediate Help?
          </h3>

          <p>
            If a child is in immediate danger or needs urgent
            assistance, contact the appropriate child protection
            or emergency service.
          </p>

          <div className="support-actions">

            <button
              type="button"
              className="ngo-button"
              onClick={() =>
                window.open(
                  "https://www.childlineindia.org/"
                )
              }
            >
              Child Helpline →
            </button>


          </div>

        </div>

=======
>>>>>>> origin/main
      </section>

    </main>
  );
}

export default ChildNGOs;