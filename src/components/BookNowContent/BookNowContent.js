import React from "react";
import { useWindowDimensions } from "../../utils/useWindowSize.js";
import { FaCalendar } from "react-icons/fa";

const BookNowContent = ({ item }) => {
	const { width } = useWindowDimensions();

	const isSmallScreenSize = width < 715;

	const imageStyle = isSmallScreenSize
		? "is-flex is-flex-direction-column mb-2"
		: "is-flex px-6 pb-4";

	const aStyle = isSmallScreenSize ? "is-book-now-small px-6" : "is-book-now";

	const bDivStyle = isSmallScreenSize
		? "px-6"
		: "is-align-content-flex-end pb-4";
	return (
		<div className={imageStyle}>
			<a href={item.href} className={aStyle}>
				<img src={item.src} alt={item.alt} />
			</a>
			<div className={bDivStyle}>
				<a href={item.href} className="button is-info">
					{item.type} <FaCalendar className="ml-3" />
				</a>
			</div>
		</div>
	);
};

export default BookNowContent;
