const points = [
  {
    title: "Qualified Team Of Professionals",
    text:
      "Our team of qualified professionals have expertise in governing the manufacturing, labeling as well as supply of cosmetics products worldwide.",
  },
  {
    title: "Connected Logistics Solutions",
    text:
      "Connected to the world by sea routes with strong financial capacity, and access to high tech machines and automated production lines.",
  },
  {
    title: "Quality Control & Assurance",
    text:
      "Our in-house lab and quality assurance department comply with the Good Manufacturing Practices set forth by international standards.",
  },
];

export default function WhyUs() {
  return (
    <section className="section why" aria-labelledby="why-title">
      <div className="container why__inner">
        <div className="why__media">
          <img src="/images/culture-jars.png" alt="" />
        </div>

        <div className="why__content">
          <h2 id="why-title" className="h2">Why Yashveer International?</h2>
          <p className="muted">
            We aim to empower lives and position Yashveer International as a globally celebrated brand.
          </p>

          <ul className="whyList">
            {points.map((p) => (
              <li key={p.title} className="whyItem">
                <div className="whyItem__dot" aria-hidden="true" />
                <div>
                  <h3 className="whyItem__title">{p.title}</h3>
                  <p className="muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
