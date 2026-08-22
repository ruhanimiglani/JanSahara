import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Complaint() {

  const [form, setForm] = useState({
    category: "",
    description: "",
    location: ""
  });

  const [submitted, setSubmitted] = useState(false);


  function handleChange(event) {

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });

  }


  function handleSubmit(event) {

    event.preventDefault();

    const complaint = {
      ...form,
      id: "JS" + Math.floor(Math.random() * 90000 + 10000)
    };

    localStorage.setItem(
      "jansaharaComplaint",
      JSON.stringify(complaint)
    );

    setSubmitted(true);
  }


  if (submitted) {

    return (
      <main className="page">

        <PageHeader
          title="Complaint Submitted"
          description="Your complaint has been saved for this project demo."
        />

        <div className="success-box">

          <div className="success-icon">
            ✓
          </div>

          <h2>Complaint submitted</h2>

          <p>
            Your complaint has been saved locally.
          </p>

          <Link
            to="/complaint-status"
            className="btn dark"
          >
            Track Status
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="page">

      <PageHeader
        title="Anonymous Complaint"
        description="Submit a complaint without displaying your personal details."
      />


      <form
        className="complaint-form"
        onSubmit={handleSubmit}
      >

        <label>
          Complaint Category

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">
              Select category
            </option>

            <option value="Women Safety">
              Women Safety
            </option>

            <option value="Child Safety">
              Child Safety
            </option>

            <option value="Domestic Violence">
              Domestic Violence
            </option>

            <option value="Cyber Crime">
              Cyber Crime
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </label>


        <label>
          Complaint Details

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the issue..."
            rows="6"
            required
          ></textarea>

        </label>


        <label>
          Location

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter location"
          />

        </label>


        <label className="file-input">

          Upload Photos

          <input
            type="file"
            accept="image/*"
          />

        </label>


        <button
          type="submit"
          className="btn dark"
        >
          Submit Complaint
        </button>

      </form>

    </main>
  );
}

export default Complaint;