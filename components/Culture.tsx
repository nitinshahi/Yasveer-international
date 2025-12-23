// app/page.tsx (or a component file)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Example solid icons
// You can import from other packages as needed
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
export default function Culture() {
  return (
    
    <section className="section culture">
      <div className="container culture__inner">
        <div className="culture__content">
          <h2 className="h2">
            Our culture empowers our people to integrate closely with clients,
            delivering the best of who we are to every partnership.
            It’s the foundation of our success and the driver of yours.
          </h2>

          {/* <p className="muted">
            It’s the foundation of our success and the driver of yours.
          </p> */}
          <ul className="checklist checklistRow" aria-label="Highlights">
            <li><FontAwesomeIcon className="checkBox" icon={faCheck} style={{ color: "white", fontSize: 30 }} /><span className="li">High standards of professionalism, integrity. Establishment of close working relationships.</span></li>
            <li><FontAwesomeIcon className="checkBox" icon={faCheck} style={{ color: "white", fontSize: 30 }} /><span className="li">We do have to give our best. Ability to learn, multicultural competence and cross border operability.</span></li>
            <li><FontAwesomeIcon className="checkBox" icon={faCheck} style={{ color: "white", fontSize: 30 }} /><span className="li">A different way of thinking, both inside and outside the box we do have to give our best.</span></li>
          </ul>
        </div>

        <div className="culture__media">
          <img src="/images/culture-jars.png" alt="" />
        </div>
      </div>
    </section>
  );
}
