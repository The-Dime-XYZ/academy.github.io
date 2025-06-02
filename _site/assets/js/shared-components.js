/** assets/js/shared-components.js **/

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/academy.github.io/assets/images/logo_black.png" alt="The Dime Logo" height="40" className="me-2" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/foundations">Foundations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tokens">Tokens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/defi">DeFi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/web3">Web3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/safety">Safety</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/thedime">Using TheDime</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}