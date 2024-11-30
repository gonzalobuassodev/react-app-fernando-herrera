import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

interface FormData {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
}

const initialValues: FormData = {
	name: '',
	email: '',
	password: '',
	repeatPassword: '',
};

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<hr />

			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'Must be 2 caracter or more')
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					password: Yup.string()
						.min(6, 'Min 6 caracters')
						.required('Required'),
					repeatPassword: Yup.string()
						.oneOf([Yup.ref('password')], 'Passwords must match')
						.required('Required'),
				})}>
				{({handleReset}) => (
					<Form>
						<MyTextInput
							placeholder='Name'
							label={'Name'}
							name={'name'}
						/>
						<MyTextInput
							placeholder='Email'
							label={'Email'}
							name={'email'}
						/>
						<MyTextInput
							placeholder='Password'
							label={'Password'}
							name={'password'}
						/>
						<MyTextInput
							placeholder='Repeat Password'
							label={'Repeat Password'}
							name={'repeatPassword'}
						/>

						<button type='submit'>Create</button>
            <button onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
