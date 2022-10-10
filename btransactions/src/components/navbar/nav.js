import "./nav.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <i className="bi bi-house icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <i className="bi bi-file-bar-graph icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <i className="bi bi-wallet icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <i className="bi bi-three-dots icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
