import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import storyboard from "./assets/preemptive-alerts-storyboard.png";
import mockup1 from "./assets/alert-fatigue-mockup-1.png";

export function Home() {
	return (
		<>
			<section className="hero">
				<div>
					<h1>Product Designer</h1>
					<p>
						I have been designing for a decade, with a focus on
						prototyping for mission- and life-critical applications.
					</p>
				</div>
			</section>
			<hr />
			<section className="topics">
				<div>
					<h4>Strategy</h4>
					<p>
						A strategy is only worth the tactics you're willing to
						employ to accomplish your goal. That's why it's
						important for me to first dig deep into the business's
						and customers' needs. What the strategy entails is at
						least as important as the strategy itself.
					</p>
				</div>
				<div>
					<h4>Process</h4>
					<p>
						Your needs &rarr; my process. There is a basic process
						inherent to design: Research and understand, sketch,
						downselect, refine, repeat. But that process will only
						get you so far. The reality of process beyond the book
						definition is highly contextual. It is my job to adapt
						to your environment and needs, not the other way around.
						Let's talk.
					</p>
				</div>
				<div>
					<h4>Design</h4>
					<p>
						I'm a designer who codes. I respect development as a
						different discipline whose success largely depends on
						the designer's ability to communicate low-level
						specifications. I don't believe that app behavior
						follows layout and visual polish. I experiment early
						with behavior and navigation and refine from there. I
						find coding so helpful that I have begun teaching it to
						designers at the graduate level.
					</p>
				</div>
				<div>
					<h4>Understanding</h4>
					<p>
						The proverbial devil is in the details. I constantly
						push myself to learn, not just about design, but about
						everything. Flashes of insight can come without warning,
						but they only come when you have open ears and eyes and
						a network of knowledge and people to draw from.
					</p>
				</div>
			</section>
			<hr />
			<section className="work">
				<div>
					<h2>Work</h2>
				</div>
				<div className="stacked">
					<h4>Live Auction Software</h4>
					<br />
					<h5>Starting Point</h5>
					<figure>
						<div>
							<iframe
								title="Starting state for software"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/y22LdpXIRbc?controls=0"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<figcaption>
							Here, we can see several issues, the most glaring
							being the layout issues at smaller resolutions. For
							more in depth analysis, read the description section
							on{" "}
							<a
								style={{ color: "hsl(181, 100%, 20%)" }}
								href="https://www.youtube.com/watch?v=y22LdpXIRbc&feature=youtu.be"
								target="_blank"
							>
								YouTube
							</a>
							.
						</figcaption>
					</figure>
					<h5>Redesign</h5>
					<figure>
						<div>
							<iframe
								title="Redesign"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/W6snoynIRiA?controls=0"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<figcaption>
							For more details and rationale, read the description
							section on{" "}
							<a
								style={{ color: "hsl(181, 100%, 20%)" }}
								href="https://www.youtube.com/watch?v=W6snoynIRiA&feature=youtu.be"
								target="_blank"
							>
								YouTube
							</a>
							.
						</figcaption>
					</figure>
				</div>
				<div className="stacked">
					<h4>Mobile Medical Apps at Eli Lilly and Co.</h4>
					<p>
						Over the past three-and-a-half years, I have operated
						under a strict NDA. I have worked on patient-facing
						mobile medical applications at Eli Lilly and Company for
						a hybrid closed-loop automated insulin delivery system,
						a migraine tracking application, and various other
						applications. A design patent is in the works for a
						novel interaction for logging and viewing information
						that allowed users to complete tasks faster and more
						effectively than with other systems.
					</p>
					<p>
						Other important work was for their homegrown design
						system. We were able to create a library of theme-able,
						coded, interactive components that mirrored what users
						would see in the final application. Using Framer, we
						were able to plug these components into various
						prototypes with simple drag-and-drop functionality. Our
						prototypes and documented components saved us time
						prototyping, reduced guesswork and boomerangs between
						design and development, and ensured that we were
						investing our time in the places where it mattered most.
					</p>
				</div>
				<br />
				<div className="stacked">
					<h4>Programming for Interaction Design - Course</h4>
					<p>
						Whether it's streamlining and improving prototyping for
						your team, exploring interactive data visualizations, or
						tying out completely new interactions, there are plenty
						of good reasons to learn programming as an interaction
						designer. In this class, we seek to build confidence as
						designers who code through the exploration of the themes
						listed above.
					</p>
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
							An experiment for my students to create and improve
							upon whose purpose is to demonstrate the finer
							points of IxD. Move around the white knob.
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
							Or maybe you're curious about the iPad OS Pointer or
							some new kind of interaction... (a somewhat crude
							implementation for now)
						</figcaption>
					</figure>
				</div>
				<br />
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
							My work at Prysm demonstrates how I approach problem
							solving and communicating complex ideas in the IxD
							space. Prysm were experiencing numerous usability
							problems as they moved from a single room
							collaboration experience to a distributed model
							across numerous devices. Ultimately, we needed to
							enable their users to independently inspect items at
							different resolutions without destroying the meaning
							created by the layout on the canvas. This solution
							ended up mitigating this issue along with several
							others.
						</p>
						<p>
							Sound, logical design can make all the difference
							when you're trying to make economical changes. Is
							there a process to this aspect of design? Aside from
							observation and understanding, not really. The
							"typical" design process was used to craft the
							presentation itself, not the solution.
						</p>
					</div>
				</div>
				<br />
				<div>
					<h4>EMR - Regenstrief Institute, Inc.</h4>
					<div className="col">
						<div>
							<figure>
								<iframe
									title="EHR Chart Review Video"
									src="https://www.youtube.com/embed/9qobpsD_IY4"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								<figcaption>
									Clef: Harmonic Chart Review
								</figcaption>
							</figure>
						</div>
						<br />
						<h5>Background</h5>
						<div>
							<p>
								Providers don't have much time to review each
								patient and to come up with a plan for care.
								What's more, the tools they use occlude insight
								on many levels.
							</p>
							<p>
								For this project, completed in 2016, we wanted
								to give health care providers a way to discover
								points of interest right away for their
								patients, then allow them to dig deeper using
								search or by selecting rows or columns of data
								points to cluster in the detail view. A big
								problem for providers is a lack of time for
								reviewing a patient's records prior to being
								seen, especially if the patient has gone through
								transitions of care.
							</p>
							<p>
								By presenting more information up front, we can
								make it easier for providers to discover
							</p>
							<ul>
								<li>trends,</li>
								<li>transitions of care, and</li>
								<li>medications prescribed.</li>
							</ul>
							<p>
								What's more, users have the ability to drill
								down horizontally or vertically to view data
								based on category or time, respectively. This
								can lead to less time spent figuring out what
								has happened to the patient since the last
								visit, and can lead to more productive
								conversations about care.
							</p>
							<br />
							<Link to="/problemlist">
								Designing the Patient Problem List
							</Link>
						</div>
					</div>
				</div>
				<br />
				<div>
					<h4>Case Study: Combating Alert Fatigue</h4>
					<div className="col">
						<div>
							<br />
							<h5>Background</h5>
							<p>
								When drugs ordered conflict with a patient's
								allergies or current drugs, alerts are triggered
								to warn providers of potentially adverse
								effects. Unfortunately for providers, many
								alerts are irrelevant, but even the ones that
								are relevant are so disruptive to workflow that
								they, too, add to providers' frustrations, so
								much so that alerts are often regarded as a
								nuissance. It's such a problem, we've created a
								name for it: alert fatigue.
							</p>
							<br />
							<h5>Approach</h5>
							<p>
								Our approach to mitigating alert fatigue is to
								make alerts in order entry systems behave more
								like the alerts we see every day. Which is best,
								an alert that tells you a surface is hot 1)
								after you touch it, 2) when your hand is less
								than five inches from the hot surface, or 3)
								from up to two yards away? We can agree that the
								closer we are to the action, the harder it is to
								make corrections. The intensity of the alert
								must rise as we close the distance to the
								action. That is, we need a loud buzzer for less
								than five inches away, and a pulsing light from
								two yards away. We can also agree that loud
								buzzers are more annoying than pulsing lights.
								Friendly alerts are preemptive alerts.
							</p>
						</div>
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
					</div>
					<div className="col">
						<br />
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
								<h5>Testing</h5>
								<p>
									We took a limited budget of $5,000 to design
									and build an initial version to test. We
									tested with hospitalists, emergency
									providers, and primary care providers, all
									of whom noticed the preemptive alerts and
									appreciated their presence. We received some
									feedback to include these alerts in other
									places in the system and to add more
									contextual information so that they had more
									information up front regarding the relevancy
									of the alert. More data needed to be
									collected as to the efficacy of the alerts
									and whether they reduced the number of
									alerts fired and user frustration with the
									system, but initial results were promising.
								</p>
								<br />
								<h5>Results</h5>
								<p>
									By presenting alerts earlier in the process
									of ordering, we allowed providers easier
									access to backing out and selecting
									something else. We also warned them that
									selecting this medication would trigger the
									GUI equivalent of a loud buzzer. By knowing
									which drugs will cause buzzers and by
									allowing easier access to alternate paths,
									alert fatigue was mitigated on two fronts.
									By caching the results on patient select, we
									didn't compromise performace at drug lookup.
									Preemptive alerts saved clicks and
									highlighted mistakes and slips in a friendly
									manner, making providers a little less
									frustrated with the system, in turn making
									order entry safer for patients.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr />
			<section className="work">
				<div>
					<h2>Other Work</h2>
					<br />
					<div>
						<a href="https://www.dropbox.com/s/bht5x7ov42jl0v1/Med%20Rec%20Paper.pdf?dl=0">
							Medication Reconciliation
						</a>{" "}
						- From transitions of care to concerns about patient
						adherence in a sea of data sources, medication
						reconciliation remains one of the toughest nuts to crack
						in the EMR space. Part of that is due to a conflation of
						terms which we explicate here.
					</div>
					<br />
					<div>
						<a href="https://youtu.be/6rN327W7nKc">
							Presentation Compiler
						</a>{" "}
						- How to organize assets for presentation in a dynamic,
						collaborative space.
					</div>
					<br />
					<div>
						<a href="https://youtu.be/Pa48svUn1gE">Commenting</a> -
						Another list of problems resolved with a simple feature.
						I had the pleasure of mentoring a brilliant intern for
						this project.
					</div>
				</div>
			</section>
		</>
	);
}
