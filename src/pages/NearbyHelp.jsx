import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { nearbyPlaces } from "../data/data";

function NearbyHelp() {

  const [message, setMessage] = useState("");


  function findLocation() {

    setMessage(
      "Location services will be available in the next version."
    );

  }


  return (
    <main className="page">

      <PageHeader
        title="Find Nearby Help"
        description="Explore different types of support available near you."
      />


      <div className="location-box">

        <div className="location-big-icon">
          📍
        </div>

        <span className="section-label">
          COMING SOON
        </span>

        <h2>Find help around you</h2>

        <p>
          In the future, JanSahara will help you
          discover police stations, hospitals, NGOs,
          shelters and other support centres nearby.
        </p>

        <button
          className="btn dark"
          onClick={findLocation}
        >
          📍 Find My Location
        </button>


        {message && (
          <div className="location-message">
            {message}
          </div>
        )}

      </div>


      <h2 className="sub-heading">
        Explore Help Categories
      </h2>


      <div className="place-grid">

        {nearbyPlaces.map((place, index) => (

          <div
            className="place-card"
            key={index}
          >

            <div className="place-icon">
              {place.icon}
            </div>

            <h3>{place.name}</h3>

            <p>{place.description}</p>

            <span className="coming-text">
              Available soon →
            </span>

          </div>

        ))}

      </div>

    </main>
  );
}

export default NearbyHelp;