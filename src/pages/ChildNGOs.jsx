import PageHeader from "../components/PageHeader";

function ChildNGOs() {

  const organizations = [
    {
      icon: "🏠",
      name: "Child Protection Organisations",
      description:
        "Organisations working to improve child safety, protection and wellbeing.",
      area: "Child Protection"
    },
    {
      icon: "🎓",
      name: "Education Support Organisations",
      description:
        "Groups that support children's education, learning and development.",
      area: "Education"
    },
    {
      icon: "🛡️",
      name: "Child Safety Organisations",
      description:
        "Organisations working towards safer environments for children.",
      area: "Safety"
    },
    {
      icon: "💙",
      name: "Child Welfare Organisations",
      description:
        "Groups that provide support and assistance for children's welfare.",
      area: "Child Welfare"
    }
  ];


  return (
    <main className="page">

      <PageHeader
        title="Child NGOs"
        description="Explore organisations and support areas focused on children's wellbeing."
      />


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

            </div>

          ))}

        </div>


        <div className="coming-feature">

          <h3>Nearby NGO Directory</h3>

          <p>
            JanSahara can later include a directory of verified
            child support organisations and nearby services.
          </p>

          <span>
            Location services are currently disabled
          </span>

        </div>

      </section>

    </main>
  );
}

export default ChildNGOs;