import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer>
			<ul className="contact">
				<div className="contact">
					<h4>Contact</h4>
				</div>
				<li>
					<FaLocationArrow size={15} style={{ marginRight: '10px' }} />
					7A Main St, Raheny Co. Irlande
				</li>
				<li>
					<FaPhoneAlt size={15} style={{ marginRight: '10px' }} /> 01 83 27 43 50
				</li>
				<li>
					<a href="mailto: watchwave@email.fr ">
						<FaEnvelope size={15} style={{ marginRight: '10px' }} />
						Email: echobeats@contact.com
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
