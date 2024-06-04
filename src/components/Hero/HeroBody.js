/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../../images/logo-3.png";
import { useWindowDimensions } from "../../utils/useWindowSize.js";
import BackGroundImage from "../BackGroundImage/BackgroundImage";

const HeaderBody = () => {
	const { width } = useWindowDimensions();
	const headerBodyClass = `container`

	const isSmallScreenSize = width < 715;
	return (
		<main className={`hero-body is-relative`}>
			<BackGroundImage />

			<div className={headerBodyClass}>
				{isSmallScreenSize ? (
					<div className="is-main-Logo-small-devices">
						<img src={logo} alt="Logo" layout="cover" />
						<div className="is-flex is-main-buttons">
							<Link to="/about-us" class="button is-info mr-2">
								About Us
							</Link>
							<Link
								to="/book"
								class="button is-info is-right-button">
								Book Now!
							</Link>
						</div>
					</div>
				) : (
					<div className="title is-1 has-text-info is-bold is-main-title">
						<h1>WELCOME TO TANITI</h1>
						<div className="is-flex is-justify-content-flex-end is-main-buttons">
							<Link to="/about-us" class="button is-info mr-2">
								About Us
							</Link>
							<Link
								to="/book"
								class="button is-info is-right-button">
								Book Now!
							</Link>
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default HeaderBody;
