import { useForm } from '@formspree/react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useFormik } from 'formik';
import React from 'react';
import './ContactForm.scss';
function ContactForm() {
	// AOS.init();
	const formik = useFormik({
		initialValues: { name: '', email: '', msg: '' },
		onSubmit: (values) => {
			useForm('Contact-form');
		},
	});
	return (
		<form
			target='_blank'
			action='https://formspree.io/f/xvonrryo'
			method='POST'
			className='Contact-form m-auto'>
			<span>
				<label htmlFor='email'>Name</label>
				<input
					id='name'
					name='name'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
			</span>
			<span>
				<label htmlFor='email'>Email </label>
				<input
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
			</span>
			<span>
				<label htmlFor='msg'>Say Hello</label>
				<textarea
					id='msg'
					name='msg'
					style={{
						'height': '125px',
					}}
					onChange={formik.handleChange}
					value={formik.values.msg}></textarea>
			</span>
			<button
				className='everyOtherBtn'
				data-aos='fade-down'
				type='submit'>
				Submit
			</button>
		</form>
	);
}

export default ContactForm;
