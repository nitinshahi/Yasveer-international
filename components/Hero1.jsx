import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
        <div className="hero-ellipse"></div>
        <div className="hero-content">
            <h1 className="hero-title">
                Make Your <span>Brand</span> Stand Out
            </h1>
            <p className="hero-subtitle">Let's build it together with custom containers.</p>
            <div className="hero-buttons">
              <button className="btn-outline">Get It Now</button>
              <button className="btn-solid">Get Quotes</button>
            </div>
        </div>
        <div className="hero-image-wrapper">
            <img src="/hero section-01.svg" alt="Product Collection" className="hero-image" />
        </div>
        {/* <Image src="/hero section-01.svg" alt="Hero Image" width={500} height={300} /> */}
      </section>
  );
}