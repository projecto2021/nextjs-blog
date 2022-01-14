import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/acerca">
              <a className="nav-link">Acerca</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/servicios">
              <a className="nav-link">Servicios</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
