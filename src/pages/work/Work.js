import React from "react";

// styles
import styles from "./Work.module.css";

function Work() {
  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.gridThreeItems}>
          <a
            href="https://www.behance.net/gallery/95507223/Italian-restaurant-website-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/vinir.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                Italian restaurant website design.
              </h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                This is an Italian website design to inform costumers of the
                best Italian food with a home, menu, gallery and a contact page.
                Please live a like and a comment. Thank you!
              </p>
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/97668565/About-Japan-Website-Everything-you-need-to-know"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/japan.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                About Japan Website. Everything you need to know.
              </h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                Japan has so much to offer but where should you start? These are
                our picks for the absolute best places to visit in Japan,
                perfect for your first or second trip to the country. This is a
                concept of a website that will tell you everything about Japan
                before your visit.
              </p>
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/95414335/OTAKUHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/otaku.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>OTAKUHUB</h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                An online anime streaming platform that streams the latest anime
                with a stunning UI and UX
              </p>
            </div>
          </a>
        </div>
        <div className={styles.gridTwoItems}>
          <a
            href="https://www.behance.net/gallery/98134429/Capacity-A-Korean-fashion-agency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/capacity.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                Capacity. A Korean fashion agency.
              </h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                Capacity is a Korean fashion agency that provides a link between
                fashion suppliers, including designers and producers, and
                fashion retailers. Capacity a complete package of services to
                their suppliers including sales, brand management, finance and
                distribution services. Korean fashion is all about the comfort
                as their every clothing apparel is oversized, be it cardigans,
                sweatshirts, sweaters or any other clothing.
              </p>
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/95827197/GYM-A-large-room-with-equipment-for-exercising"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/gym.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                GYM. A large room with equipment for exercising.
              </h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                This is a website landpage of a gym agency that representing
                themselves as a a large room (demonstrated in their logo) with
                equipment for exercising the body and increasing strength or a
                club where you can go to exercise and keep fit.
              </p>
            </div>
          </a>
        </div>
        <div className={styles.gridHalfItems}>
          <a
            href="https://www.behance.net/gallery/96639877/CASSIOPEIA-Everyting-about-space"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/cassiopeia.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                CASSIOPEIA - Everyting about space.
              </h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                This is a website names after a Cassiopeia is a constellation in
                the northern sky, named after the vain queen Cassiopeia in Greek
                mythology, who boasted about her unrivaled beauty. The aim of
                the website is to inform the people that are intrested in space
                and the future of it and learn about it.
              </p>
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/96455343/-OtakuHub-app-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/work/otakuApp.jpg" alt="" />
            <div className={styles.content}>
              <h2 className={styles.title}>オタク OtakuHub app design.</h2>
              <span className={styles.hr}></span>
              <p className={styles.para}>
                This is an UX/UI design concept for an IOS platform of an anime
                streaming platform otakuhub, the aim of the app is to bring an
                otaku community together as the name suggests.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
