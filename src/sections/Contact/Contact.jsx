// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import ContactForm from '../../comp/ContactForm/ContactForm';

function Contact() {
	// AOS.init();
	return (
		<div id='contact' className='section '>
			<div>
				<h2 data-aos='fade-up'>Contact</h2>
				<ContactForm />
			</div>
		</div>
	);
}

export default Contact;
