export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__oval" aria-hidden="true" />

      <div className="container hero__inner">
        <h1 className="hero__title">
          Make Your <br />
          <strong>Brand</strong> Stand Out
        </h1>

        <p className="hero__sub">let’s build it together with custom containers.</p>

        <div className="hero__actions">
          <a className="btn btn--outline" href="#products">Get It Now</a>
          <a className="btn btn--primary" href="#quote">Get Quotes</a>
        </div>

        <div className="hero__imgWrap">
          <img className="hero__img" src="/hero section-01.svg" alt="Products" />
        </div>
      </div>
    </section>
  );
}
