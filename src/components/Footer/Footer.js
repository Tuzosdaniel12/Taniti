import React from 'react'
import { FaFacebook, FaInstagram, FaQuestion, FaTwitter, FaYelp } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function Footer({ setOpen }) {
	return (
		<footer className="footer p-6">
			<div className="container px-6">
				<div className="columns">
					<div class="column">
						<ul className="pt-3 pb-3">
							<li>
								<Link to="/">• Home</Link>
							</li>
							<li>
								<Link to="/about-us">• About Us</Link>
							</li>
							<li>
								<Link to="/Accommodations">
									• Accommodations
								</Link>
							</li>
							<li>
								<Link to="/things-to-do">• Things To Do</Link>
							</li>
							<li>
								<Link to="/book-now">• Book</Link>
							</li>
							<li>
								<button
									className="button has-text-info is-small is-outlined is-inverted"
									onClick={() => setOpen()}>
									<span>Questions</span>
									<FaQuestion />
								</button>
							</li>
						</ul>
					</div>
					<div class="column">
						<div className="pt-3 is-flex is-flex-direction-column">
							<Link
								href="https://665e62ecc42ff6000824869f--dsg-taniti.netlify.app/"
								className="mb-2">
								Visit-Taini
							</Link>

							<Link href="tel:(123)456-7890" className="mb-3">
								Customer Support: (123)456-7890
							</Link>
							<div className="is-flex is-justify-content-space-between is-size-5">
								<Link
									href="https://www.facebook.com/"
									className="pl-3">
									<FaFacebook />
								</Link>
								<Link href="https://www.instagram.com/">
									<FaInstagram />
								</Link>
								<Link href="https://www.yelp.com/">
									<FaYelp />
								</Link>
								<Link href="https://x.com/" className="pr-3">
									<FaTwitter />
								</Link>
							</div>
						</div>
					</div>

					<div class="column">
						<ul>
							<li>
								<a href="https://unsplash.com">
									• Power by: unsplash
								</a>
							</li>
							<li>
								<a href="https://665e62ecc42ff6000824869f--dsg-taniti.netlify.app/">
									{" "}
									• Private Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
