import { ErrorMessage, Field, Form, Formik } from 'formik';
import './App.css';
import TextInput from './components/TextInput';

export default function App() {
	const validateFields = (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = 'Requerido';
		}
		else if (values.name.length < 5) {
			errors.name = 'El nombre es muy corto';
		}

		if (!values.lastName) {
			errors.lastName = 'Requerido';
		}
		else if (values.lastName.length < 5) {
			errors.lastName = 'El nombre es muy corto';
		}

		return errors;
	}
	/*
		const formik = useFormik({
			initialValues: {
				name: '',
				lastName: '',
				email: '',
			},
			validate: validateFields,
			onSubmit: (values) => { console.log(values) }
		});
		<input {...formik.getFieldProps('name')} type='text'></input>
	*/
	return (
		<Formik initialValues={{ name: '', lastName: '', email: '' }} validate={validateFields} onSubmit={(values) => { console.log(values) }}>
			<Form>
				<TextInput label='Nombre' name='name' type='text' />				
				<br />
				<label>Apellido</label>
				<Field name='lastName' type='text' />
				<ErrorMessage name='lastName' />
				<br />
				<label>Correo</label>
				<Field name='email' type='email' />
				<ErrorMessage name='email' />
				<button type='submit'>Enviar</button>
			</Form>
		</Formik >
	);
}
