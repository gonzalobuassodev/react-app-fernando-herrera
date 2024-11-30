import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormkAbstractionPage = () => {
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
						<MyTextInput
							label='First Name'
							name='firstName'
							placeholder='Nombre'
						/>
						<MyTextInput
							label='Last Name'
							name='lastName'
							placeholder='Apellido'
						/>
						<MyTextInput
							label='Email Address'
							name='email'
							placeholder='Email'
						/>

						<MySelect label='jobType' name='jobType'>
							<option value=''>Pick something</option>
							<option value='Frontend'>Frontend</option>
							<option value='Backend'>Backend</option>
							<option value='Fullstack'>Fullstack</option>
							<option value='it-jr'>It Jr</option>
						</MySelect>

						<MyCheckbox label='Terms and Condiction' name='terms' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
