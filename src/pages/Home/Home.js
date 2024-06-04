import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeaderBody from "../../components/Hero/HeroBody";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal.js";

const Home = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
        setOpen(!isOpen);
	};

	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
				<HeaderBody />
			</div>
			<Footer setOpen={handleOpen} />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default Home;
