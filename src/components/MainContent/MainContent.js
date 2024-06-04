import React  from 'react';
import {  Link } from "react-router-dom";
import { useWindowDimensions } from '../../utils/useWindowSize';
import { FaQuestion } from 'react-icons/fa';

const MainContent = ({ children, title, setOpen }) => {
	const { width } = useWindowDimensions();

	const isSmallScreenSize = width < 715;

	return (
		<main className="hero-body is-relative">
			<div className="is-overlay is-background-image-about-user"></div>
			<div className="container">
				{isSmallScreenSize ? (
					<>
						<div className="title is-4 has-text-info is-bold  is-main-title-small">
							<h1>{title}</h1>
						</div>
						<div>{children}</div>
					</>
				) : (
					<>
						<div className="title is-1 has-text-info is-bold is-main-title">
							<h1>{title}</h1>
						</div>
						<div>{children}</div>
					</>
				)}
				<div
					className={`
						${
							isSmallScreenSize
								? "pt-3 is-flex is-flex-direction-column"
								: "pt-3 is-flex is-flex-direction-row is-justify-content-space-evenly"
						}`}>
					<Link to="/accommodations" class="button is-info mb-1">
						Accommodations
					</Link>
					<Link to="/things-to-do" class="button is-info mb-1">
						Things To Do
					</Link>
					<Link to="/book-now" class="button is-info mb-1">
						Book Now!
					</Link>
					<button
						className="button has-text-info  is-outlined is-inverted"
						onClick={() => setOpen()}>
						<span>Questions</span>
						<FaQuestion />
					</button>
				</div>
			</div>
		</main>
	);
};

export default MainContent;
