import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function ComplaintStatus() {

  const [complaint, setComplaint] = useState(null);


  useEffect(() => {

    const savedComplaint =
      localStorage.getItem("jansaharaComplaint");

    if (savedComplaint) {
      setComplaint(JSON.parse(savedComplaint));
    }

  }, []);


  return (
    <main className="page">

      <PageHeader
        title="Track Complaint"
        description="View the status of your saved complaint."
      />


      {complaint ? (

        <div className="status-box">

          <div className="status-check">
            ✓
          </div>

          <h2>{complaint.id}</h2>

          <p>
            <strong>Category:</strong>
            {" "}{complaint.category}
          </p>

          <p>
            <strong>Status:</strong>
            {" "}Submitted for review
          </p>

          <p className="note">
            This is a frontend-only project demonstration.
          </p>

        </div>

      ) : (

        <div className="empty-box">

          <h2>No complaint found</h2>

          <p>
            Submit a complaint first.
          </p>

          <Link
            to="/complaint"
            className="btn dark"
          >
            Submit Complaint
          </Link>

        </div>

      )}

    </main>
  );
}

export default ComplaintStatus;