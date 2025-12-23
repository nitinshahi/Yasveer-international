const values = [
  { title: "Passion\nFor Excellence" },
  { title: "Integrity &\nTransparency" },
  { title: "Participative\nDecision Making" },
  { title: "Efficiency" },
  { title: "Modern equipment\n& technology" },
  { title: "Collaboration,\nsupport & teamwork" },
];

export default function CoreValues() {
  return (
    <section className="values" aria-labelledby="values-title">
      <div className="container">
        <div className="values__head">
          <h2 id="values-title" className="h2 h2--light">Core Value & Principles</h2>
          <p className="muted muted--light">
            A seamless private label experience, covering everything from formulation to packaging.
          </p>
        </div>

        <div className="grid grid--3 valuesGrid">
          {values.map((v) => (
            <article key={v.title} className="valueCard">
              <div className="valueCard__icon" aria-hidden="true">✦</div>
              <h3 className="valueCard__title">
                {v.title.split("\n").map((t, i) => (
                  <span key={i} className="block">{t}</span>
                ))}
              </h3>
              <p className="valueCard__text">
                A seamless private label experience, covering everything from formulation to packaging.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
