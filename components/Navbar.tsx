export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__row">
        <div className="nav__brand">
          <img src="/logo.svg" alt="Yashveer International" />
        </div>

        <nav className="nav__links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#private">Private Label</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav__cta">
          <a className="btn btn--primary" href="#quote">Get Quotes</a>
        </div>
      </div>
    </header>
  );
}
