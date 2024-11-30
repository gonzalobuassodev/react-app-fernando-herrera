import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormkComponentsPage = () => {
	return (
		<div>
			<h1>Formik Components Tutorial</h1>
			<hr />

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					lastName: Yup.string()
						.max(10, 'Must be 10 characters or less')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					terms: Yup.boolean().isTrue('Debe aceptar las condiciones'),
					jobType: Yup.string()
						.required('Required')
						.notOneOf(['it-jr'], 'No puede ser It Jr'),
				})}>
				{formik => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field name='firstName' type='text' />
						<ErrorMessage name='firstName' component='span' />

						<label htmlFor='firstName'>Last Name</label>
						<Field name='lastName' type='text' />
						<ErrorMessage name='lastName' component='span' />

						<label htmlFor='email'>Email Address</label>
						<Field name='email' type='email' />
						<ErrorMessage name='email' component='span' />

						<label htmlFor='jobType'>Job Type</label>
						<Field name='jobType' as='select'>
							<option value=''>Pick something</option>
							<option value='Frontend'>Frontend</option>
							<option value='Backend'>Backend</option>
							<option value='Fullstack'>Fullstack</option>
							<option value='it-jr'>It Jr</option>
						</Field>
						<ErrorMessage name='jobType' component='span' />

						<label htmlFor='terms'>
							<Field name='terms' type='checkbox' />
							Terms and Conditions
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
