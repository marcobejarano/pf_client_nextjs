import styles from './ToggleSwitch.module.css';
import { useState, useEffect } from 'react';

const ToggleSwitch = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute('data-theme', savedTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	return (
		<div className={ styles.toggleSwitch__container }>
			<input 
			    type='checkbox' 
			    id='checkbox'
			    onChange={ toggleTheme } 
			    checked={ theme === 'dark' } 
			/>
			<label htmlFor='checkbox'>Dark mode</label>
		</div>
	);
};

export default ToggleSwitch;