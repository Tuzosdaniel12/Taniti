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
						Taniti is a small and tropical island in the Pacific. While
						the island has an area of less than 500 square miles,
						the terrain is varied and includes both sandy and rocky
						beaches. Taniti has a small but safe harbor. Visit
						Taniti to enjoy the beaches, explore the rain forest,
						and visit active the volcano. Visit Taniti and enjoy our paradise!
					</p>
				</MainContent>
			</div>

			<Footer setOpen={handleOpen} />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default AboutUs;
