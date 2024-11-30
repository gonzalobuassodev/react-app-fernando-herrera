import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password' | 'number';
	placeholder?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			<ErrorMessage name={props.name} component={'span'} />

			{/* {meta.touched && meta.error && (
				<span className={`error-message`}>{meta.error}</span>
			)} */}
		</>
	);
};
