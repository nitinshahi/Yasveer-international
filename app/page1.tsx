// import Header from '@/components/Header';

// export default function Home() {
//   return (
//     <main>
//       <Header></Header>
//       <h1>Homepage</h1>
//     </main>
//   );
// }

import "./home.css";
import Header1 from "@/components/Header1";
import Hero1 from "@/components/Hero1";

export default function HomePage() {
  return (
    <main>
      {/* HEADER SECTION */}
      <Header1></Header1>
      {/* HERO SECTION */}
      <Hero1></Hero1>

      {/* STORY SECTION */}
      <section className="story">
        <div>
          <h2>Story of <br /> Yashveer International</h2>
          <p>
            A seamless private label experience, covering everything
            from formulation to packaging.
          </p>

          <div className="stats">
            <div><strong>290+</strong><span>Happy Customers</span></div>
            <div><strong>50+</strong><span>International Clients</span></div>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="products">
        <h2>Our Products Range</h2>

        <div className="product-grid">
          <div className="card">Skin Care</div>
          <div className="card">Hair Care</div>
          <div className="card">Essential Oils</div>
          <div className="card">Baby Care</div>
          <div className="card">Sun Care</div>
          <div className="card">Hair Treatment</div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="culture">
        <div className="culture-text">
          <h2>Our Culture Empowers Our People</h2>
          <ul>
            <li>High standards of professionalism & integrity</li>
            <li>Global outlook and multicultural competence</li>
            <li>Creative thinking inside and outside the box</li>
          </ul>
        </div>
        <div className="culture-image"></div>
      </section>

      {/* CORE VALUES */}
      <section className="values">
        <h2>Core Value & Principles</h2>
        <div className="values-grid">
          <div>Passion for Excellence</div>
          <div>Integrity & Transparency</div>
          <div>Participative Decision Making</div>
          <div>Efficiency</div>
          <div>Modern Equipment & Technology</div>
          <div>Collaboration & Support</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Explore Our Services</h2>
        <div className="services-grid">
          <div>Private Labeling</div>
          <div>OEM & ODM Manufacturing</div>
          <div>Contract Manufacturing</div>
          <div>Custom Formulation</div>
        </div>
      </section>

    </main>
  );
}

