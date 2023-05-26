import React, { useRef } from 'react';
import Header from '../components/Header';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		const formMess = document.querySelector('.formMessage');

		emailjs
			.sendForm(
				'service_xwccn7i',
				'template_dndmc04',
				form.current,
				import.meta.env.VITE_ID
			)
			.then(
				(res) => {
					console.log(res.text);
					form.current.reset();
					formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

					setTimeout(() => {
						formMess.innerHTML = '';
					}, 2000);
				},
				(err) => {
					console.log(err.text);
					formMess.innerHTML =
						"<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

					setTimeout(() => {
						formMess.innerHTML = '';
					}, 2000);
				}
			);
	};

	return (
		<div className="form-container">
			<Header />
			<h2 className="contact-us">Contact us</h2>
			<form ref={form} onSubmit={sendEmail} className="form-content">
				<label htmlFor="name" className="fa-user">
					<FaUser size={15} />
				</label>
				<input
					type="text"
					name="name"
					required
					autoComplete="off"
					id="name"
					placeholder="name"
				/>
				<label className="fa-envelope">
					<FaEnvelope size={15} />
				</label>
				<input
					type="email"
					name="email"
					required
					autoComplete="off"
					id="email"
					placeholder="email"
				/>

				<textarea name="message" id="mess" placeholder="your message" />
				<button className="submit"> Submit </button>
			</form>
			<div className="formMessage"></div>
		</div>
	);
};

export default Contact;
