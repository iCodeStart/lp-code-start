import { Chip } from "../Chip";

export function FullstackTrail() {
  return (
    <div className="fullstack-trail">
      <div className="container">
        <div className="title-container">
          <Chip label="Trilha" />
          <h1 className="section-title">Nossa trilha fullstack</h1>
        </div>
        <div className="fullstack-trail__content">
          <div className="fullstack-desktop">
            {/* <img
              src="/our-trail-fullstack.webp"
              alt="Trilha fullstack Code Start"
            /> */}
            <img src="/roadmapCodedesk.png" alt="Trilha fullstack Code Start" />
          </div>
          <div className="fullstack-mobile">
            {/* <img
              src="/our-trail-fullstack-mobile.webp"
              alt="Trilha fullstack Code Start"
            /> */}
            <img src="/roadmapCode.png" alt="Trilha fullstack Code Start" />
          </div>
        </div>
      </div>
    </div>
  );
}
