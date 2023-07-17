import { useForm } from '@formspree/react';

import { motion } from 'framer-motion';

import { useFormik } from 'formik';
import React from 'react';
// import './ContactForm.scss';
function ContactForm() {
	const formik = useFormik({
		initialValues: { name: '', email: '', msg: '' },
		onSubmit: (values) => {
			useForm('Contact-form');
		},
	});
	const ContactFormAnimation = {
		show: {
			width: '100%',
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<form
			target=''
			action='https://formspree.io/f/xvonrryo'
			method='POST'
			className='Contact-form m-auto'>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='email'>
					Name
				</motion.label>
				<input
					id='name'
					name='name'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
			</span>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='email'>
					Email{' '}
				</motion.label>
				<input
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
			</span>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='msg'>
					Say Hello
				</motion.label>
				<textarea
					id='msg'
					name='msg'
					style={{
						'height': '125px',
						color: 'black',
						padding: '10px',
					}}
					onChange={formik.handleChange}
					value={formik.values.msg}></textarea>
			</span>
			<motion.button
				whileHover={{
					background:
						'linear-gradient(180deg,#34725d 0%,#081516 100%)',
				}}
				data-aos='fade-down'
				type='submit'
				className='other-btn'>
				Send
			</motion.button>
		</form>
	);
}

export default ContactForm;
