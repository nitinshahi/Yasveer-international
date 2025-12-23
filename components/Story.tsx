export default function Story() {
  return (
    <section id="about" className="section story">
      <div className="container story__inner">
        <div className="story__logo">
          <img src="/images/logo.svg" alt="Yashveer International" />
        </div>

        <div>
          <h2 className="story__title">
            Story of <br />
            <em>Yashveer International</em>
          </h2>

          <p className="muted" style={{ marginTop: 16 }}>
            A seamless private label experience, covering everything from formulation to packaging.
            A seamless private label experience, covering everything from formulation to packaging.
          </p>

          <p className="muted" style={{ marginTop: 14 }}>
            A seamless private label experience, covering everything from formulation to packaging.
          </p>

          <div className="story__stats">
            <div className="storyStat">
              <div className="storyStat__num">63+</div>
              <div className="storyStat__label">Happy<br/>Customers</div>
            </div>

            {/* <div className="story__divider" aria-hidden="true" /> */}

            {/* <div className="storyStat">
              <div className="storyStat__num">50+</div>
              <div className="storyStat__label">International<br/>Clients</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
