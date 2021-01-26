import React from "react";
import "./styles.css";
import storyboard from "./assets/preemptive-alerts-storyboard.png";
import mockup1 from "./assets/alert-fatigue-mockup-1.png";

export function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Designing the Patient Problem List</h1>
        </div>
      </section>
      <hr />
      <section className="work">
        <div>
          <h2>Work</h2>
          <p>
            Below are some samples that highlight what make me <i>different</i>{" "}
            as a designer.
          </p>
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
              My work at Prysm demonstrates how I approach problem solving and
              communicating complex ideas in the IxD space. Prysm were
              experiencing numerous usability problems as they moved from a
              single room collaboration experience to a distributed model across
              numerous devices. Ultimately, we needed to enable their users to
              independently inspect items at different resolutions without
              destroying the meaning created by the layout on the canvas. This
              solution ended up mitigating this issue along with several others.
            </p>
            <p>
              Sound, logical design can make all the difference when you're
              trying to make economical changes. Is there a process to this
              aspect of design? Aside from observation and understanding, not
              really. The "typical" design process was used to craft the
              presentation itself, not the solution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
