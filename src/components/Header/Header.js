import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ setOpen }) => {
	const path = window.location.href.split("/").pop();

	function toggleBurgerMenu() {
		document.querySelector(".navbar-menu").classList.toggle("is-active");
	}

	return (
		<header className="hero-head is-height">
			<nav className="navbar is_height is-primary has-text-info">
				<div className="container is_height">
					<div className="navbar-brand is_height ">
						<Link to="/" className="navbar-item is_height mt-2">
							<h1 className="title is-4 has-text-info is-bold">
								🌴 Taniti 🌴
							</h1>

						</Link>
						<button
							onClick={toggleBurgerMenu}
							className="navbar-burger"
							data-target="navbarMenuHeroB">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
					<div id="navbarMenuHeroB is-active" className="navbar-menu">
						<div className="navbar-end">
							<Link
								className={`navbar-item ${
									path === "" && "is-active"
								}`}
								to="/">
								Home
							</Link>
							<Link
								className={`navbar-item ${
									path === "about-us" && "is-active"
								}`}
								to="/about-us">
								About Us
							</Link>
							<Link
								className={`navbar-item ${
									path === "accommodations" && "is-active"
								}`}
								to="/accommodations">
								Accommodations
							</Link>
							<Link
								className={`navbar-item ${
									path === "things-to-do" && "is-active"
								}`}
								to="/things-to-do">
								Things To Do
							</Link>
							<Link
								className={`navbar-item ${
									path === "book-now" && "is-active"
								}`}
								to="/book-now">
								Book
							</Link>
							<span className="navbar-item">
								<div className="control has-icons-left has-icons-right ">
									<button
										className="button has-text-info is-small is-outlined is-inverted"
										onClick={() => setOpen()}>
										<span>Questions</span>
										<FaQuestion />
									</button>
								</div>
							</span>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
