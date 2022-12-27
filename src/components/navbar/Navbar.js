import styles from "./navbar.scss";

export function NavBar() {
  return (
    <nav id="nav">
      <div class="nav left">
        <span class="gradient skew">
          <h1 class="logo un-skew">
            <a href="/">Best IT</a>
          </h1>
        </span>
        <button id="menu" class="btn-nav">
          <span class="fas fa-bars"></span>
        </button>
      </div>
      <div class="nav right">
        <a href="/" class="nav-link active">
          <span class="nav-link-span">
            <span class="u-nav">Home</span>
          </span>
        </a>
        
        <a href="/login" class="nav-link">
          <span class="nav-link-span">
            <span class="u-nav">Log In</span>
          </span>
        </a>

        <a href="/offices" class="nav-link">
          <span class="nav-link-span">
            <span class="u-nav">Offices</span>
          </span>
        </a>
        
      </div>
    </nav>
  );
}
