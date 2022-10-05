import React, { useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	// FormData -> Instancia los elementos de un dato y los captura mientras son llenados.
	// Esta funcion se encarga de mandar los datos de inicio de sesion al 
	const handleSubmit = (event) => {
		event.preventDefault();
		// prevee que HTML no ponga la contraseña en el link
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="your-name@email.com" className="input input-email" />
					{/* Se cambia el ID por la palabra 'name' */}
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						className="primary-button login-button"
						onClick={handleSubmit}>
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button
					className="secondary-button signup-button">
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
