import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const InitialValues: { [key: string]: any } = {};
const requiredField: {[key: string]: any} = {}

for (const input of formJson) {
	InitialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required'){
            schema = schema.required('Este campo es requerido');
        } else if (rule.type === 'minLength'){
            if (rule.value === undefined) continue;
            schema = schema.min(rule.value, `${rule.value} caracteres o mas`);
        } else if (rule.type === 'isEmail') {
            schema = schema.email('Invalid email address');
        }
    }

    requiredField[input.name] = schema;
}

const validationSchema = Yup.object(requiredField);

export const DinamicForm = () => {
	return (
		<div>
			<h1>Dinamic Form</h1>
			<hr />

			<Formik
				initialValues={InitialValues}
                validationSchema={validationSchema}
				onSubmit={values => {
					console.log(values);
				}}>
				{({ handleReset }) => (
					<Form noValidate>
						<span>Hola Mundo</span>
						{formJson.map(
							({ type, name, placeholder, label, options }) => {
								if (
									type === 'input' ||
									type === 'email' ||
									type === 'password'
								) {
									return (
										<MyTextInput
											key={name}
											label={label}
											name={name}
											type={type as any}
											placeholder={placeholder}
										/>
									);
								} else if (type === 'select') {
									return (
										<MySelect 
                                        key={name}
                                        label={label} name={name}>
											<option value=''>
												Select an option
											</option>

											{options?.map(({ id, label }) => (
												<option key={id} value={id}>
													{label}
												</option>
											))}
										</MySelect>
									);
								}
								return (
									<span>Type: {type} no es soportado </span>
								);
							},
						)}

						<button type='submit'>Submit</button>
						<button onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
