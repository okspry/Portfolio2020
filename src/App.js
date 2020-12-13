import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./styles.css";
import storyboard from "./assets/preemptive-alerts-storyboard.png";
import mockup1 from "./assets/alert-fatigue-mockup-1.png";

export default function App() {
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [0, 40], [1, 0.6]);
  const hY = useTransform(scrollY, [0, 40], [0, -30]);
  const paraY = useTransform(
    scrollY,
    [0, window.document.body.offsetHeight],
    [-1000, 1000]
  );
  return (
    <motion.div className="App grid">
      <motion.div style={{ y: 0, x: 0 }}>
        <motion.header style={{ y: hY }}>
          <motion.div style={{ scale: y, originY: 1, originX: 0 }}>
            <motion.h3>Ken Spry</motion.h3>
          </motion.div>
        </motion.header>
        <motion.div className="image" style={{ y: 300 + paraY }} />
        <motion.div className="image" style={{ y: 500 + paraY }} />
        <motion.div className="image" style={{ y: 1000 + paraY }} />
        <motion.div className="image" style={{ y: 500 + paraY }} />
        <motion.div className="image" style={{ y: 1200 + paraY }} />
        <main className="main main-text">
          <section className="hero">
            <div>
              <h1>Product Designer & Educator</h1>
              <p>
                I have been designing for a decade, with a focus on prototyping
                for mission- and life-critical applications.
              </p>
            </div>
          </section>
          <hr />
          <section className="topics">
            <div>
              <h4>Strategy</h4>
              <p>
                A strategy is only worth the tactics you're willing to employ to
                accomplish your goal. You can't take over the world by giving
                everyone a candy bar. That's why it's important for me to first
                dig deep into the business's and customers' needs: What the
                strategy entails is at least as important as the strategy
                itself.
              </p>
            </div>
            <div>
              <h4>Process</h4>
              <p>
                Your needs &rarr; my process. There is a basic process inherent
                to design: Research and understand, sketch, downselect, refine,
                repeat. But that process will only get you as far as not putting
                the sausage casing into the meat. The reality of process beyond
                the book definition is highly contextual. It is my job to your
                environment and needs, not the other way around. Let's talk.
              </p>
            </div>
            <div>
              <h4>Design</h4>
              <p>
                I'm not a coder who designs. I'm a designer who codes. I respect
                development as a different discipline whose success largely
                depends on the designer's ability to communicate low-level
                specifications. I don't believe that app behavior follows layout
                and visual polish. I experiment early with behavior and
                navigation and refine from there. I find coding so helpful that
                I have begun teaching it at the graduate level.
              </p>
            </div>
            <div>
              <h4>Understanding</h4>
              <p>
                What makes one sausage better than another isn't the quality of
                the process but the ingredients that go into it. The proverbial
                devil is in the details. I constantly push myself to learn, not
                just about design, but about everything. Flashes of insight can
                come without warning, but they only come when you have open ears
                and eyes and a network of knowledge and people to draw from.
              </p>
            </div>
          </section>
          <hr />
          <section className="work">
            <div>
              <h2>Work</h2>
              <p>
                Below are some samples that highlight what make me{" "}
                <i>different</i> as a designer.
              </p>
            </div>
            <div className="stacked">
              <h4>Mobile Medical Apps at Eli Lilly and Co.</h4>
              <p>
                Over the past three-and-a-half years, I have operated under a
                strict NDA. I have worked on patient-facing mobile medical
                applications at Eli Lilly and Company for a hybrid closed-loop
                automated insulin delivery system, a migraine tracking
                application, and various other applications. A design patent is
                in the works for a novel interaction for logging and viewing
                information that allowed users to complete tasks faster and more
                effectively than with other systems.
              </p>
              <p>
                Other important work was for their homegrown design system. We
                were able to create a library of theme-able, coded, interactive
                components that mirrored what users would see in the final
                application. Using Framer, we were able to plug these components
                into various prototypes with simple drag-and-drop functionality.
                Our prototypes and documented components saved us time
                prototyping, reduced guesswork and boomerangs between design and
                development, and ensured that we were investing our time in the
                places where it mattered most.
              </p>
            </div>
            <div className="stacked">
              <h4>Programming for Interaction Design - Course</h4>
              <figure>
                <div>
                  <iframe
                    title="Fake-corns app"
                    src="https://cocky-curran-3765df.netlify.app/"
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
              <br style={{ height: "50px" }} />
              <figure id="iPadOS">
                <div>
                  <iframe
                    title="iPad OS pointer"
                    src="https://vigilant-kepler-088368.netlify.app/"
                    allowFullScreen
                  ></iframe>
                </div>
                <figcaption>
                  Or maybe you're curious about the iPad OS Pointer or some new
                  kind of interaction... (a somewhat crude implementation for
                  now)
                </figcaption>
              </figure>
            </div>
            <div className="stacked">
              <h4>Prysm Systems, Inc.</h4>
              <div>
                <figure>
                  <iframe
                    title="Prysm Video"
                    src="https://www.youtube.com/embed/ziiDf51liJc"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <figcaption>Zoom vs. Scale</figcaption>
                </figure>
              </div>
              <div>
                <p>
                  My work at Prysm, Inc., demonstrates how I approach problem
                  solving and communicating complex ideas in the IxD space.
                  Prysm were experiencing numerous usability problems as they
                  moved from a single room collaboration experience to a
                  distributed model across numerous devices. Ultimately, we
                  needed to enable their users to independently inspect items at
                  different resolutions without destroying the meaning created
                  by the layout on the canvas. This solution ended up mitigating
                  this issue along with several others.
                </p>
                <p>
                  Sound, logical design can make all the difference when you're
                  trying to make economical changes. Is there a process to this
                  aspect of design? Aside from observation and understanding,
                  not really. The "typical" design process was used to craft the
                  presentation itself, not the solution.
                </p>
              </div>
            </div>
            <div className="section col">
              <h4>EMR - Regenstrief Institute, Inc.</h4>
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
                  or by selecting rows or columns of data points to cluster in
                  the detail view. A big problem for providers is a lack of time
                  for reviewing a patient's records prior to being seen,
                  especially if the patient has gone through transitions of
                  care.
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
                  respectively. This can lead to less time spent figuring out
                  what has happened to the patient since the last visit, and can
                  lead to more productive conversations about care.
                </p>
              </div>
            </div>
            <div className="section col">
              <h4>Combating Alert Fatigue</h4>
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
                  surface is hot 1) after you touch it, 2) when your hand is
                  less than five inches from the hot surface, or 3) from up to
                  two yards away? We can agree that the closer we are to the
                  action, the harder it is to make corrections. The intensity of
                  the alert must rise as we close the distance to the action.
                  That is, we need a loud buzzer for less than five inches away,
                  and a pulsing light from two yards away. We can also agree
                  that loud buzzers are more annoying than pulsing lights.
                  Friendly alerts are preemptive alerts.
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
                  something else. We also warn them that selecting this
                  medication will trigger the GUI equivalent of a loud buzzer.
                  By knowing which drugs will cause buzzers and by allowing
                  easier access to alternate paths, alert fatigue can be
                  mitigated on two fronts. By caching the results on patient
                  select, we don't compromise performace at drug lookup. With
                  preemptive alerts, we can save clicks, mistakes, and slips,
                  all while making providers a little less frustrated with the
                  system, in turn making order entry safer for patients.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <section className="work">
            <div>
              <h2>Other Work</h2>
              <br />
              <div>
                <a
                  target="_blank"
                  href="https://www.dropbox.com/s/bht5x7ov42jl0v1/Med%20Rec%20Paper.pdf?dl=0"
                >
                  Medication Reconciliation
                </a>{" "}
                - From transitions of care to concerns about patient adherence
                in a sea of data sources, medication reconciliation remains one
                of the toughest nuts to crack in the EMR space. Part of that is
                due to a conflation of terms which we explicate here.
              </div>
              <br />
              <div>
                <a target="_blank" href="https://youtu.be/6rN327W7nKc">
                  Presentation Compiler
                </a>{" "}
                - How to organize assets for presentation in a dynamic,
                collaborative space.
              </div>
              <br />
              <div>
                <a target="_blank" href="https://youtu.be/Pa48svUn1gE">
                  Commenting
                </a>{" "}
                - Another list of problems resolved with a simple feature. I had
                the pleasure of mentoring a brilliant intern for this project.
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div>Ken Spry</div>
          <div>Indianapolis, IN</div>
          <div>For more, contact me at kenneth.spry1@gmail.com</div>
        </footer>
      </motion.div>
    </motion.div>
  );
}
