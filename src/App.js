import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./styles.css";
import storyboard from "./assets/preemptive-alerts-storyboard.png";
import mockup1 from "./assets/alert-fatigue-mockup-1.png";

const brightPink = "#fa255e";
const lightPink = "#f8e5e5";
const mediumPink = "#a88586";

const style = {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundImage: `linear-gradient(to right, ${brightPink}, ${lightPink}, ${mediumPink})`
};
const animate = {
  backgroundImage: [
    `linear-gradient(to right, ${brightPink}, ${lightPink}, ${mediumPink})`,
    `linear-gradient(to right, ${lightPink}, ${mediumPink}, ${brightPink})`,
    `linear-gradient(to right, ${mediumPink}, ${brightPink}, ${lightPink})`,
    `linear-gradient(to right, ${brightPink}, ${lightPink}, ${mediumPink})`
  ]
};
const transition = {
  repeat: Infinity,
  ease: "linear",
  duration: 8
};

export default function App() {
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [0, 40], [1, 0.6]);

  return (
    <motion.div className="App grid">
      <motion.div style={{ y: 0, x: 0 }}>
        <motion.header>
          <motion.div style={{ scale: y }}>
            <motion.h1 style={style} animate={animate} transition={transition}>
              Ken Spry
            </motion.h1>
            <h4 className="muted-text">Interaction Designer</h4>
          </motion.div>
        </motion.header>
        <div className="main main-text">
          <div className="stacked">
            <div>
              <h4>
                I have been designing for a decade, with a focus on mission- and
                life-critical applications.
              </h4>
              <p>
                Over the past three years, I have operated under a strict NDA. I
                have worked on patient-facing mobile medical applications at Eli
                Lilly and Company for a hybrid closed-loop automated insulin
                delivery system, a migraine tracking application, and various
                other applications. A design patent is in the works for a novel
                interaction for logging and viewing information that allowed
                users to complete tasks faster and more effectively than with
                other systems.
              </p>
              <p>
                Other important work was for their homegrown design system. We
                were able to create a library of coded, interactive components
                that mirrored what users would see in the final application.
                Using Framer, we were able to plug these components into various
                prototypes with simple drag-and-drop functionality. Our
                prototypes and documented components reduced guesswork and
                boomerangs between design and development, saved us time
                prototyping, and ensured that we were investing our time in the
                places it mattered most.
              </p>
            </div>
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
                canvas. My solution ended up mitigating this issue along with
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
                detail view. I used D3 for this project. My partners wired it up
                using available deidentified patient data for the FHIR-athon at
                Eskenazi Health.
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
                so disruptive to workflow that they too add to providers'
                frustrations, so much so that alerts are often regarded as a
                nuissance. It's such a problem, we've created a name for it:
                alert fatigue. My approach to mitigating alert fatigue is to
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
                Caching the results on patient select means we don't compromise
                performace at drug lookup. With preemptive alerts, we can save
                clicks, mistakes, and slips, all while making providers a little
                less frustrated with the system.
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h4>
              Collaboration tools, drawing UI, medicine, research tools,
              interactive data visualization, alert fatigue, wall-sized touch
              screens, and mobile and connected devices
            </h4>
          </div>
        </div>
        <footer>
          <div>Ken Spry</div>
          <div>Indianapolis, IN</div>
          <div>kenneth.spry1@gmail.com</div>
        </footer>
        {/* <div className="test">Test</div> */}
      </motion.div>
    </motion.div>
  );
}
