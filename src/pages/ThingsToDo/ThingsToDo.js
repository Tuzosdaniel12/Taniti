import React, { useState } from "react";

import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import Modal from "../../components/Modal/Modal.js";
import ImagesContent from "../../components/ImagesContent/ImagesContent.js";

const ThingsToDo = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};

	const array = [
		{
			title: "Visit Taniti",
			content:
				"Visit Taniti to enjoy the beaches, explore the rain forest, and to visit the volcano.",
			image: "https://images.unsplash.com/photo-1584077804610-45fa278123a4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Food and Beverage",
			content:
				"Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, two serve Pan-Asian cuisine and several pubs, including a microbrewery. Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.",
			image: "https://images.unsplash.com/photo-1664403421901-1ef422325c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
			title: "Art and History",
			content:
				"Visiting our local history museum or visit our art galleries.",
			image: "https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "right"
		},
		{
			title: "Fun Activities",
			content:
				"Fishing tours, Snorkeling, zip-lining in the rain forest, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade and bowling and boat/bus tours.",
			image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "right"
		},
		{
			title: "Coming Soon",
			content:
				"A nine-hole golf course should be operational by next year",
			image: "https://images.unsplash.com/photo-1582528979903-bee578216a69?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "left"
		}
	];
	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<ImagesContent title="Things To Do" imageArray={array} />
			<Footer isOpen={isOpen} setOpen={handleOpen} />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default ThingsToDo;
