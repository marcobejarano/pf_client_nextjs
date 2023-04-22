'use client';

import styles from './Header.module.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Header = () => {
	return (
		<div className={ styles.header__container }>
		    <img src='/images/paby-logo.png' alt='Paby logo' className={ styles.header__logo } />
		    <div className={ styles.header__links }>
		        <ToggleSwitch />
		    	<div className={ styles.header__link }>Contáctanos</div>
		    	<div className={ styles.header__link }>Acerca de nosotros</div>
		    	<div className={ styles.header__link }>Registrarse</div>
		    	<button className={ styles.header__button }>Ingresar</button>
		    </div>
		</div>
	);
};

export default Header;