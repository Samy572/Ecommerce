import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Newsletter = () => {
	return (
		<div className="newsletter">
			<h3>NEWSLETTER</h3>
			<div className="container-form">
				<form>
					<label htmlFor="email">
						SIGN UP FOR LATEST UPDATE <br /> AND OFFER
					</label>
					<div className="container-subscribe">
						<input id="email" type="email" placeholder="Email Address" />
						<button>Subscribe</button>
					</div>
				</form>
				<p>Will be used in accordance with our Privacy Policy</p>
				<ul className="social-media">
					<li>
						<FaFacebook size={20} style={{ fill: '#3b5998 ' }} />
					</li>
					<li>
						<FaTwitter size={20} style={{ fill: '#1DA1F2' }} />
					</li>
					<li>
						<FaInstagram size={20} style={{ fill: '#E4405F' }} />
					</li>
					<li>
						<FaLinkedin size={20} style={{ fill: '#0A66C2' }} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Newsletter;
