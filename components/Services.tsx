const services = [
  { title: "Private\nLabelling", img: "/images/service-1.jpg" },
  { title: "OEM & ODM\nManufacturing", img: "/images/service-2.jpg" },
  { title: "Contract\nManufacturing", img: "/images/service-3.jpg" },
  { title: "Custom\nFormulation", img: "/images/service-4.jpg" },
];

export default function Services() {
  return (
    <section className="section section--tight" aria-labelledby="services-title">
      <div className="container">
        <div className="sectionHead">
          <p className="kicker">Explore our services</p>
          <p className="muted">
            A seamless private label experience, covering everything from <br /> formulation to packaging.
          </p>
        </div>

        <div className="grid grid--4 services tileGrid">
          {services.map((s) => (
            <article key={s.title} className="card serviceCard">
              <div className="serviceCard__media tile__img">
                <img src={s.img} alt="" />
              </div>
              <h3 className="serviceCard__title tile__title">
                {s.title.split("\n").map((t, i) => (
                  <span key={i} className="block">{t}</span>
                ))}
              </h3>
              <p className="serviceCard__text tile__text">
                A seamless private label experience, covering everything from formulation to packaging.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
