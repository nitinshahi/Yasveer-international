const items = [
  { title: "SKIN CARE", img: "/images/product-1.jpg" },
  { title: "HAIR CARE", img: "/images/product-2.jpg" },
  { title: "ESSENTIAL OILS", img: "/images/product-3.jpg" },
  { title: "BABY CARE", img: "/images/product-4.jpg" },
  { title: "SUN CARE", img: "/images/product-5.jpg" },
  { title: "HAIR TREATMENT", img: "/images/product-6.jpg" },
];

export default function ProductRange() {
  return (
    <section id="products" className="section section--tight">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">Our Products Range</h2>
          <p className="muted">A seamless private label experience, covering everything from formulation to packaging.</p>
        </div>

        <div className="tileGrid">
          {items.map((p) => (
            <article key={p.title}>
              <div className="tile__img">
                <img src={p.img} alt={p.title} />
              </div>
              <h3 className="tile__title upper">{p.title}</h3>
              <p className="tile__text">
                A seamless private label experience, covering everything from formulation to packaging.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
