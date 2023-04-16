import { useForm } from '@formspree/react';

import { motion } from 'framer-motion';

import { useFormik } from 'formik';
import React from 'react';
import './ContactForm.scss';
function ContactForm() {
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
			<motion.button
				whileHover={{
					background:
						'linear-gradient(180deg,#34725d 0%,#081516 100%)',
				}}
				className='everyOtherBtn'
				data-aos='fade-down'
				type='submit'>
				Submit
			</motion.button>
		</form>
	);
}

export default ContactForm;
