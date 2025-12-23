export default function Culture() {
  return (
    <section className="section culture">
      <div className="container culture__inner">
        <div className="culture__content">
          <h2 className="h2">
            Our culture empowers our people to integrate closely with clients,
            delivering the best of who we are to every partnership.
          </h2>

          <p className="muted">
            It’s the foundation of our success and the driver of yours.
          </p>

          <ul className="checklist" aria-label="Highlights">
            <li>High standards of professionalism, integrity. Establishment of close working relationships.</li>
            <li>We do have to give our best. Ability to learn, multicultural competence and cross border operability.</li>
            <li>A different way of thinking, both inside and outside the box we do have to give our best.</li>
          </ul>
        </div>

        <div className="culture__media">
          <img src="/images/culture-jars.png" alt="" />
        </div>
      </div>
    </section>
  );
}
