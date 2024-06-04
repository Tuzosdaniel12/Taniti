import React, { useState } from "react";

import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import Modal from "../../components/Modal/Modal.js";
import MainContent from "../../components/MainContent/MainContent.js";

const AboutUs = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};
	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
				<MainContent title="About Us" setOpen={handleOpen}>
					<p className="is-about-us">
						Taniti is a small, tropical island in the Pacific. While
						the island has an area of less than 500 square miles,
						the terrain is varied and includes both sandy and rocky
						beaches, a small but safe harbor, lush tropical
						rainforests, and a mountainous interior that includes a
						small, active volcano. Taniti has an indigenous
						population of about 20,000. Until a recent increase in
						tourism, most the Tanitian economy was dominated by
						fishing or agriculture.
					</p>
				</MainContent>
			</div>

			<Footer setOpen={handleOpen} />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default AboutUs;
