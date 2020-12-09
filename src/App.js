import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./styles.css";
import storyboard from "./assets/preemptive-alerts-storyboard.png";
import mockup1 from "./assets/alert-fatigue-mockup-1.png";

// const brightPink = "#fa255e";
// const lightPink = "#f8e5e5";
// const mediumPink = "#a88586";
// const russianViolet = "hsl(300, 51%, 20%)";
// const russianVioletDark = "hsl(287, 39%, 20%)";
// const darkPurple = "hsla(266, 33%, 20%)";
// const spaceCadet = "hsla(242, 25%, 20%)";
// const prussianBlue = "hsla(217, 35%, 20%)";
// const charcoal = "hsla(201, 47%, 20%)";
// const midnightGreenDark = "hsla(193, 61%, 20%)";
// const midnightGreenMedium = "hsla(187, 78%, 20%)";
// const midnightGreenLight = "hsla(184, 88%, 20%)";
// const skobeloff = "hsla(181, 100%, 20%)";

// const style = {
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   backgroundImage: `linear-gradient(to right, ${russianViolet}, ${russianVioletDark}, ${russianVioletDark}, ${spaceCadet},  ${spaceCadet}, ${prussianBlue}, ${prussianBlue}, ${charcoal}, ${midnightGreenDark})`
// };
// const animate = {
//   backgroundImage: [
//     `linear-gradient(to right, ${russianVioletDark}, ${spaceCadet}, ${midnightGreenDark})`,
//     `linear-gradient(to right, ${midnightGreenDark}, ${russianVioletDark}, ${spaceCadet})`,
//     `linear-gradient(to right, ${spaceCadet}, ${midnightGreenDark}, ${russianVioletDark})`,
//     `linear-gradient(to right, ${russianVioletDark}, ${spaceCadet}, ${midnightGreenDark})`
//   ]
// };
// const transition = {
//   repeat: Infinity,
//   ease: "linear",
//   duration: 8
// };

export default function App() {
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [0, 40], [1, 0.6]);
  // const h = useTransform(scrollY, [0, 40], [130, 110]);
  const hY = useTransform(scrollY, [0, 40], [0, -30]);

  return (
    <motion.div className="App grid">
      <motion.div style={{ y: 0, x: 0 }}>
        <motion.header style={{ y: hY }}>
          <motion.div style={{ scale: y }}>
            <motion.h1>Ken Spry</motion.h1>
            <h4 className="muted-text">
              Digital Product Designer and Educator
            </h4>
          </motion.div>
        </motion.header>
        <div className="main main-text">
          <div className="stacked">
            <h4>
              I have been designing for a decade, with a focus on prototyping
              for mission- and life-critical applications.
            </h4>
            <p>
              My experience includes collaboration tools, Web and desktop
              applications, drawing UI, form entry, onboarding experiences,
              medicine, research tools, interactive data visualization and
              information dashboards, alert fatigue, wall-sized touch screens,
              and mobile and connected devices.
            </p>
            <p>
              Over the past three-and-a-half years, I have operated under a
              strict NDA. I have worked on patient-facing mobile medical
              applications at Eli Lilly and Company for a hybrid closed-loop
              automated insulin delivery system, a migraine tracking
              application, and various other applications. A design patent is in
              the works for a novel interaction for logging and viewing
              information that allowed users to complete tasks faster and more
              effectively than with other systems.
            </p>
            <p>
              Other important work was for their homegrown design system. We
              were able to create a library of theme-able, coded, interactive
              components that mirrored what users would see in the final
              application. Using Framer, we were able to plug these components
              into various prototypes with simple drag-and-drop functionality.
              Our prototypes and documented components reduced guesswork and
              boomerangs between design and development, saved us time
              prototyping, and ensured that we were investing our time in the
              places where it mattered most.
            </p>
          </div>
          <hr />
          <div className="stacked">
            <h4>
              Programming lets designers reach into the future, plan for the
              unexpected, test realistically, and hand off quality design.
              That’s why I’m dedicated to teaching this skill to the next
              generation of designers.
            </h4>
            <figure>
              <div>
                <iframe
                  title="Fake-corns app"
                  src="https://cocky-curran-3765df.netlify.app/"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <figcaption>
                An experiment for my students to create and improve upon whose
                purpose is to demonstrate the finer points of IxD. Move around
                the white knob.
              </figcaption>
            </figure>
          </div>
          <hr />
          <div className="section col">
            <div>
              <figure>
                <iframe
                  title="Prysm Video"
                  src="https://www.youtube.com/embed/ziiDf51liJc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <figcaption>Zoom vs. Scale</figcaption>
              </figure>
            </div>
            <div>
              <p>
                My work at Prysm, Inc., demonstrates how I approach problem
                solving and communicating complex ideas in the IxD space. Prysm
                were experiencing numerous usability problems as they moved from
                a single room collaboration experience to a distributed model
                across numerous devices. Ultimately, we needed to enable their
                users to independently inspect items at different resolutions
                without destroying the meaning created by the layout on the
                canvas. This solution ended up mitigating this issue along with
                several others.
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h4>
              The designer’s job is to save money. I make that my business. Cut
              bloat, use design systems, focus on what matters, and make sure it
              actually works.
            </h4>
          </div>
          <hr />
          <div className="section col">
            <div>
              <figure>
                <iframe
                  title="EHR Chart Review Video"
                  src="https://www.youtube.com/embed/9qobpsD_IY4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <figcaption>Clef: Harmonic Chart Review</figcaption>
              </figure>
            </div>
            <div>
              <p>
                For this project, completed in 2016, we wanted to give health
                care providers a way to discover points of interest right away
                for their patients, then allow them to dig deeper using search
                or by selecting rows or columns of data points to cluster in the
                detail view. A big problem for providers is a lack of time for
                reviewing a patient's records prior to being seen, especially if
                the patient has gone through transitions of care.
              </p>
              <p>
                By presenting more information up front, we can make it easier
                for providers to discover
              </p>
              <ul>
                <li>trends,</li>
                <li>transitions of care, and</li>
                <li>medications prescribed.</li>
              </ul>
              <p>
                What's more, users have the ability to drill down horizontally
                or vertically to view data based on category or time,
                respectively. This can lead to less time spent figuring out what
                has happened to the patient since the last visit, and can lead
                to more productive conversations about care.
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h4>Combating Alert Fatigue</h4>
          </div>
          <div className="section col">
            <div>
              <figure>
                <img
                  title="Alert Fatigue"
                  width="100%"
                  alt="alert fatigue"
                  src={storyboard}
                ></img>
                <figcaption>Alert Fatigue</figcaption>
              </figure>
            </div>
            <div>
              <p>
                When drugs ordered conflict with a patient's allergies or
                current drugs, alerts are triggered to warn providers of
                potentially adverse effects. Unfortunately for providers, many
                alerts are irrelevant, but even the ones that are relevant are
                so disruptive to workflow that they, too, add to providers'
                frustrations, so much so that alerts are often regarded as a
                nuissance. It's such a problem, we've created a name for it:
                alert fatigue. Our approach to mitigating alert fatigue is to
                make alerts in order entry systems behave more like the alerts
                we see every day. Which is best, an alert that tells you a
                surface is hot 1) after you touch it, 2) when your hand is less
                than five inches from the hot surface, or 3) from up to two
                yards away? We can agree that the closer we are to the action,
                the harder it is to make corrections. The intensity of the alert
                must rise as we close the distance to the action. That is, we
                need a loud buzzer for less than five inches away, and a pulsing
                light from two yards away. We can also agree that loud buzzers
                are more annoying than pulsing lights. Friendly alerts are
                preemptive alerts.
              </p>
            </div>
          </div>
          <div>
            <figure>
              <img
                title="Preemptive Alert Mockup"
                width="100%"
                alt="preemptive alert mockup"
                src={mockup1}
              ></img>
              <figcaption>Preemptive Alert Mockup</figcaption>
            </figure>
          </div>
          <div>
            <div>
              <p>
                By presenting alerts earlier in the process of ordering, we
                allow providers easier access to backing out and selecting
                something else. We also warn them that selecting this medication
                will trigger the GUI equivalent of a loud buzzer. By knowing
                which drugs will cause buzzers and by allowing easier access to
                alternate paths, alert fatigue can be mitigated on two fronts.
                By caching the results on patient select, we don't compromise
                performace at drug lookup. With preemptive alerts, we can save
                clicks, mistakes, and slips, all while making providers a little
                less frustrated with the system, in turn making order entry
                safer for patients.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <div>Ken Spry</div>
          <div>Indianapolis, IN</div>
          <div>For loads more, contact me at kenneth.spry1@gmail.com</div>
        </footer>
        {/* <div className="test">Test</div> */}
      </motion.div>
    </motion.div>
  );
}
