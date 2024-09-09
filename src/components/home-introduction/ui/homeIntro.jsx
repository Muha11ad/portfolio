import "./homeIntro.scss";

import Typewriter from "typewriter-effect";

export const HomeIntroTitle = () => {
	return (
		<div className="intro-wrapper">
			<h1 className="intro-title">
				Peace and blessings be upon you.
				<br />
				My given name is
				<span className="intro-bisque"> Muhammad.</span>
			</h1>
			<p className="intro-subtitle">
				<span style={{ display: "inline-flex", gap: "10px" }}>
					I'm a junior
					<span className="intro-bisque">
						<Typewriter
							options={{
								strings: ["Frontend", "Backend"],
								autoStart: true,
								loop: true,
								delay: 75,
							}}
						/>
					</span>
				</span>
				<br />
				developer with a <strong> passion </strong> for both{" "}
				<strong>technology</strong> and
				<strong> science </strong>. I enjoy
				<strong> reading </strong>
				scientific and motivational historical books, and I stay active by
				practicing
				<strong> Judo. </strong>
				I'm always eager to learn new things and challenge myself.
			</p>
		</div>
	);
};
