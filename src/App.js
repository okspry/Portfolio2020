import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./styles.css";

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

  const y = useTransform(scrollY, [0, 20], [1, 0.6]);
  const bgHeight = useTransform(scrollY, [0, 900], [0, 1900], {
    clamp: false
  });

  return (
    <motion.div className="App grid">
      <motion.div
        style={{
          height: 1,
          y: 100,
          background: lightPink,
          scaleY: bgHeight
        }}
      />
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
                purpose is to demonstrate the finer points of IxD.
              </figcaption>
            </figure>
          </div>
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
          <div>
            <h4>
              The designer’s job is to save money. I make that my business. Cut
              bloat, use design systems, focus on what matters, and make sure it
              actually works.
            </h4>
          </div>
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
