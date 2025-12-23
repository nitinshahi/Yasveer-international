const steps = [
  { title: "CHOOSE YOUR\nPRODUCTS", img: "/images/service-1.jpg" },
  { title: "PRODUCT\nSAMPLING", img: "/images/service-2.jpg" },
  { title: "PRODUCTION &\nPACKAGING", img: "/images/service-3.jpg" },
  { title: "PRODUCT\nSHIPPING", img: "/images/service-4.jpg" },
];

export default function EndToEnd() {
  return (
    <section className="section section--tight" aria-labelledby="e2e-title">
      <div className="container">
        <div className="sectionHead center">
          <h2 id="e2e-title" className="h2">End-to end private labeling</h2>
          <p className="muted">
            A seamless private label experience, covering everything from formulation to packaging.
          </p>
        </div>

        <div className="grid grid--4 e2e tileGrid">
          {steps.map((s) => (
            <article key={s.title} className="card e2eCard">
              <div className="e2eCard__media tile__img">
                <img src={s.img} alt="" />
              </div>
              <h3 className="e2eCard__title tile__title">
                {s.title.split("\n").map((t, i) => (
                  <span key={i} className="block tile__text">{t}</span>
                ))}
              </h3>
              <p className="muted">
                A seamless private label experience, covering everything from formulation to packaging.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
