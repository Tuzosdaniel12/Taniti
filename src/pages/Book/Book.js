import React, { useState } from "react";

import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import Modal from "../../components/Modal/Modal.js";
import { useWindowDimensions } from "../../utils/useWindowSize.js";
import BookNowContent from "../../components/BookNowContent/BookNowContent.js";


const Book = () => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = () => {
		console.log(isOpen);
		setOpen(!isOpen);
	};

	const { width } = useWindowDimensions();

	const isSmallScreenSize = width < 715;

	const pStyle = isSmallScreenSize ? "title is-5 px-6" : "subtitle px-6";

	const h1Style = isSmallScreenSize
		? "container px-6 py-4 title mb-0 has-text-info"
		: "container px-6 py-4 title is-1 has-text-info";

	const items = [
		{
			href: "https://www.royalcaribbean.com/",
			src: "https://www.royalcaribbean.com/content/dam/royal/resources/icons/logo/royal-caribbean-logo-no-border.svg",
			alt: "https://www.royalcaribbean.com/",
			type: "Book Cruise"
		},
		{
			href: "https://www.carnival.com/",
			src: "https://shop.carnival.com/cdn/shop/files/logo-new_640x.png?v=1614310924",
			alt: "carnival cruises",
			type: "Book Cruise"
		},
		{
			href: "https://www.ncl.com/",
			src: "https://www.ncl.com/assets/v1/images/logos/logo-ncl-black.svg",
			alt: "norwegian cruises",
			type: "Book Cruise"
		},
		{
			href: "https://www.cheapflights.com/",
			src: "https://content.r9cdn.net/rimg/provider-logos/common/socialmedia/cheapflights-logo.png?width=1200&height=630&crop=false",
			alt: "cheapflights",
			type: "Book Flight"
		},
		{
			href: "https://www.tripadvisor.com/CheapFlightsHome",
			src: "https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg",
			alt: "trip advisor",
			type: "Book Flight"
		},
		{
			href: "https://www.expedia.com/flight-deals",
			src: "https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2&6f9ec7db",
			alt: "expedia",
			type: "Book Flight"
		}
	];
	return (
		<div>
			<div className="hero is-primary is-large">
				<Header setOpen={handleOpen} />
			</div>
			<div className="container">
				<h1 className={h1Style}>Travel Options</h1>
				<p className={pStyle}>
					Almost all visitors arrive to Taniti by air, though some
					arrive on a small cruise ship that docks in Yellow Leaf Bay
					for one night per week. Taniti is served by a small airport
					that can accommodate small jets and propeller planes. Taniti
					is in the process of expanding the airport so larger jets
					will be able to land on the island within the next few
					years.
				</p>
			</div>

			<div className="container">
				<h1 className={h1Style}>Book Now</h1>
				{items.map((item) => (
					<BookNowContent item={item} />
				))}
			</div>
			<Footer />
			<Modal isOpen={isOpen} setOpen={handleOpen} />
		</div>
	);
};

export default Book;
