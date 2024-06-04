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
								<Link to="/things-to-do">• Accommodations</Link>
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
							<p className="title is-5">Taini</p>
							<Link
								href="https://visit-taini.rescuegroups.org/"
								className="mb-2">
								https://visit-taini.rescuegroups.org/
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
						<h5>Privacy Policy</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Illo commodi mollitia eligendi quidem.
							Inventore, sint. Rerum quas in odit vitae, assumenda
							nostrum tempore sequi accusamus neque dicta
							recusandae? Eaque, ex?
						</p>
						<p>Copyright 2022</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
