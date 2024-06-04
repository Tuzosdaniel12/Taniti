import React from "react";

import { useWindowDimensions } from "../../utils/useWindowSize.js";

const ImagesContent = ({ imageArray, title }) => {
	const { width } = useWindowDimensions();

	const isSmallScreenSize = width < 715;

	const imageStyle = isSmallScreenSize
		? "is-flex is-flex-direction-column"
		: "is-flex px-6 pb-2";

	const pStyle = isSmallScreenSize ? "title is-4" : "title px-6";

	const h1Style = isSmallScreenSize
		? "container px-6 py-4 title is-3 has-text-info"
		: "container px-6 py-4 title is-1 has-text-info";

	return (
		<div>
			<h1 className={h1Style}>{title}</h1>
			{imageArray.map((item, index) => {
				return index % 2 === 0 || isSmallScreenSize ? (
					<section className="container px-6">
						<h2 className={pStyle}>{item.title}</h2>
						<div className={imageStyle}>
							<div className="is-stable-image-width-container mr-3">
								<img src={item.image} alt={item.alt} />
							</div>
							<p className="">{item.content}</p>
						</div>
					</section>
				) : (
					<section className="container px-6">
						<h2 className={pStyle}>{item.title}</h2>
						<div className={imageStyle}>
							<p className="mr-3">{item.content}</p>
							<div className="is-stable-image-width-container">
								<img src={item.image} alt={item.alt} />
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default ImagesContent;
