import { Formik } from 'formik';
import './App.css';

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
	*/
	return (
		<Formik initialValues={{ name: '', lastName: '', email: '' }} validate={validateFields} onSubmit={(values) => { console.log(values) }}>
			{(formik) =>
				<form onSubmit={formik.handleSubmit}>
					<label>Nombre</label>
					<input {...formik.getFieldProps('name')} type='text'></input>
					{(formik.touched.name && formik.errors.name) ? <div>{formik.errors.name}</div> : null}
					<br />
					<label>Apellido</label>
					<input type='text'{...formik.getFieldProps('lastName')} ></input>
					{(formik.touched.lastName && formik.errors.lastName) ? <div>{formik.errors.lastName}</div> : null}
					<br />
					<label>Correo</label>
					<input type='email' {...formik.getFieldProps('email')} ></input>
					{(formik.touched.email && formik.errors.email) ? <div>{formik.errors.email}</div> : null}
					<button type='submit'>Enviar</button>
				</form>
			}
		</Formik >
	);
}
