export default function Enquiry() {
  return (
    <section id="contact" className="section enquiry">
      <div className="container enquiry__inner">
        <div className="enquiry__left">
          <h2 className="h2">Drop us a Call</h2>

          <form className="form" 
          //Handle form submission
        //   onSubmit={(e) => e.preventDefault()}
          >
            <div className="field">
              <label htmlFor="name">your name</label>
              <input id="name" placeholder="Enter your name" />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" placeholder="Enter your number" />
            </div>

            <div className="field">
              <label htmlFor="message">message</label>
              <textarea id="message" placeholder="Enter your message" rows={4} />
            </div>

            <button className="btn btn--primary" type="submit">
              Submit Message
            </button>

            <p className="fine muted">Add footnote / additional information in here.</p>
          </form>
        </div>

        <div className="enquiry__right">
          <div className="mapCard">
            <img src="/images/map-placeholder.jpg" alt="Map placeholder" />
            <div className="mapCard__info">
              <h3 className="mapCard__title">Visit Us</h3>
              <p className="muted">Narephat, Kathmandu, Nepal</p>

              <h3 className="mapCard__title">Reach out</h3>
              <p className="muted">(917) 339-6416</p>

              <h3 className="mapCard__title">Social Media</h3>
              <p className="muted">Lorem ipsum dolor sit amet, consectetur adip elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
