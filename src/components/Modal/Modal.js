/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Modal = ({ isOpen, setOpen }) => {
	const isActive = isOpen ? "is-active" : "";
	return (
		<div className={`modal ${isActive}`}>
			<div className="modal-background"></div>
			<div className="modal-content">
				<div className="content has-text-white">
					<h1 className="modal-title has-text-white">
						Frequently Requested Information
					</h1>
					<ul>
						<li>
							Power outlets are 120 volts (the same as in the
							United States).{" "}
						</li>
						<li>
							Alcohol is not allowed to be served or sold between
							the hours of midnight and 9:00 a.m. The drinking age
							on
						</li>
						<li>
							Taniti is 18 and the drinking age is not strictly
							enforced.
						</li>
						<li>
							Many younger Tanitians speak fluent English. Very
							little English is spoken in rural areas, especially
							by the older residents.
						</li>
						<li>
							There is one hospital and several clinics. The
							hospital has many multilingual employees.
						</li>
						<li>
							Violent crime is very rare on Taniti, but as tourism
							increases, there are more reports of pickpocketing
							and other petty crimes.
						</li>
						<li>
							Taniti enjoys a large number of national holidays,
							and many tourist attractions and restaurants will be
							closed on holidays, so visitors should plan
							accordingly.
						</li>
						<li>
							Taniti uses the U.S. dollar as its currency, but
							many businesses will also accept euros and yen.
							Several banks facilitate currency exchange, and many
							businesses accept major credit cards.
						</li>
					</ul>
				</div>
			</div>
			<button
				className="modal-close is-large"
				aria-label="close"
				onClick={() => setOpen(false)}></button>
		</div>
	);
};

export default Modal;
