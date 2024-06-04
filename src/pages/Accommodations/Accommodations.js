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
			title: "Four Star Resort",
			content: "Four star resort located near Yellow Leaf Bay.",
			image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "left"
		},
		{
			title: "Family Owned Hotels",
			content:
				"Taniti has Many family owned hotels all over the Taniti City.",
			image: "https://plus.unsplash.com/premium_photo-1681922761659-07483f67b6c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "right"
		},
		{
			title: "Bed and Breakfasts",
			content:
				"Sleeping accommodations for a night and a morning meal, provided in guest houses and small hotels.",
			image: "https://plus.unsplash.com/premium_photo-1661427472129-5bc76fe47edf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "right"
		},
		{
			title: "Public Buses",
			content:
				"Buses serve Taniti City and run from 5 a.m. to 11 p.m. every day.",
			image: "https://plus.unsplash.com/premium_photo-1676573201285-20af67891d0a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "left"
		},
		{
			title: "Taxi",
			content:
				"Taniti has Many family owned hotels all over the Taniti City.",
			image: "https://images.unsplash.com/photo-1511814104612-47a8f022914b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "right"
		},
		{
			title: "Rental Cars",
			content:
				"Taniti has Many family owned hotels all over the Taniti City.",
			image: "https://images.unsplash.com/photo-1568288564902-dead3b6fe60c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "left"
		},
		{
			title: "Bikes",
			content:
				"Bikes and helmets are available to rent from several vendors (helmets are required by law).",
			image: "https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "right"
		},
		{
			title: "By Foot",
			content:
				"Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.",
			image: "https://plus.unsplash.com/premium_photo-1663076169374-229cffc9d79f?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			imageLocation: "left"
		}
	];
	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<ImagesContent
				title="Accommodations and Transportation"
				imageArray={array}
			/>
			<Footer isOpen={isOpen} setOpen={handleOpen} />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default ThingsToDo;
