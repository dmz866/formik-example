import { useField } from 'formik';

export default function TextInput({ label, ...props }) {
	const [field, meta] = useField(props);
	return (
		<div>
			<label>{label}</label>
			<input {...field} />
			{(meta.touched && meta.error) ? <div>{meta.error}</div> : null}
		</div>
	);
}