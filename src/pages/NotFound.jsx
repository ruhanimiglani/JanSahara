import { Link } from "react-router-dom";

function NotFound() {

  return (
    <main className="not-found">

      <div>
        🔎
      </div>

      <h1>
        Page not found
      </h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="btn dark"
      >
        Go Home
      </Link>

    </main>
  );
}

export default NotFound;