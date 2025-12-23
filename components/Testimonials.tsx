const reviews = [
  {
    name: "Brooklyn",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Brooklyn",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Brooklyn",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Testimonials() {
  return (
    <section className="section section--tight" aria-labelledby="testi-title">
      <div className="container">
        <div className="sectionHead">
          <h2 id="testi-title" className="h2">
            What They Say about Us?
          </h2>
          <p className="muted">
            A seamless private label experience, covering everything from formulation to packaging.
          </p>
        </div>

        <div className="testiWrap">
          <button className="arrowBtn" type="button" aria-label="Previous">
            ‹
          </button>

          <div className="testiGrid">
            {reviews.map((r, i) => (
              <article key={i} className="testiCard">
                <div className="avatar" aria-hidden="true">
                  <img src="/images/user-1.png" alt="Brooklyn" />
                  {/* optional: later replace with <img /> */}
                  <span className="avatar__placeholder" />
                  <span className="badge" />
                </div>

                <p className="muted" style={{ marginTop: 10 }}>
                  {r.text}
                </p>

                <div className="testiName">{r.name}</div>
              </article>
            ))}
          </div>

          <button className="arrowBtn" type="button" aria-label="Next">
            ›
          </button>
        </div>

        <div className="dots" aria-label="Pagination">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}
