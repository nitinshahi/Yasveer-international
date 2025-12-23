export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="footerBrand">
              <div className="footerLogo"><img src="/logo.svg" alt="Yashveer International" /></div>
              <div className="footerName"></div>
            </div>

            <p className="footerDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere dolor massa, pellentesque.
            </p>
          </div>

          <div className="footerCols">
            <div>
              <div className="footerTitle">Pages</div>
              <a href="#home">Home Page</a>
              <a href="#about">About us</a>
              <a href="#products">Event</a>
              <a href="#home">Reference Page</a>
            </div>

            <div>
              <div className="footerTitle">Others</div>
              <a href="#home">Style Guide</a>
              <a href="#home">Instructions</a>
              <a href="#home">Licensing</a>
              <a href="#home">Others</a>
            </div>

            <div>
              <div className="footerTitle">Contact</div>
              <p>Narephat, Kathmandu, Nepal</p>
              <p>(917) 339-6416</p>
              <p>info@yashveer.com</p>
            </div>
          </div>
        </div>

        <div className="footerLine" />

        <div className="footerBottom">
          <div className="footerLinks">
            <a href="#home">Home Page</a>
            <a href="#about">About us</a>
            <a href="#products">Event</a>
          </div>

          <div className="footerIcons" aria-label="Social links">
            <a className="iconCircle" href="#!" aria-label="Facebook">f</a>
            <a className="iconCircle" href="#!" aria-label="Instagram">⌁</a>
            <a className="iconCircle" href="#!" aria-label="Twitter">𝕏</a>
            <a className="iconCircle" href="#!" aria-label="YouTube">▶</a>
          </div>

          <div className="footerCopy">© 2025 Copyright MahaEstate</div>
        </div>
      </div>
    </footer>
  );
}
