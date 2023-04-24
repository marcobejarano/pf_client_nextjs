'use client';

import styles from './page.module.css';
import { useState } from 'react';

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});

	const loginDataHandler = (e) => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value
		});
	};

	return (
		<div className={ styles.login__container }>
			<form className={ styles.login__form_container }>
			    <img src='/images/paby-logo.png' alt='Paby logo' className={ styles.login__image }/>
				<div className={ styles.login__formGroup }>
					<label htmlFor='email' className={ styles.login__formControl_label }>Email:</label>
					<input 
					    type='email'
					    id='email'
					    name='email'
					    value={ loginData.email }
					    onChange={ loginDataHandler }
					    className={ styles.login__formControl_input }
					/>
				</div>
				<div className={ styles.login__formGroup }>
					<label htmlFor='password' className={ styles.login__formControl_label }>Contraseña:</label>
					<input 
					    type='password' 
					    id='password' 
					    name='password' 
					    value={ loginData.password } 
					    onChange={ loginDataHandler }
					    className={ styles.login__formControl_input }
					/>
				</div>
				<button>INICIAR SESIÓN</button>
				<div className={ styles.login__formGroup_secondary }>
					<div>Olvidé mi contraseña: </div>
					<button>Solicitar contraseña</button>
				</div>
				<div className={ styles.login__formGroup_secondary }>
					<div>Aún no tengo cuenta: </div>
					<button>Registrarse</button>
				</div>
			</form>
		</div>
	);
};

export default Login;