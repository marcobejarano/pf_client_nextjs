import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={ styles.footer__container }>
		    <div className={ styles.footer__section_container }>
		    	<img src='/images/paby-logo.png' alt='Paby logo' className={ styles.footer__logo }/>
		    	<div className={ styles.footer__section_subtitle }>Síguenos:</div>
		    	<div className={ styles.footer__icons }>
		    		<img src='/images/facebook.png' alt='Facebook logo' className={ styles.footer__icon } />
		    		<img src='/images/instagram.png' alt='Facebook logo' className={ styles.footer__icon } />
		    		<img src='/images/twitter.png' alt='Facebook logo' className={ styles.footer__icon } />
		    	</div>
		    </div>
		    <div className={ styles.footer__section_container }>
		    	<div className={ styles.footer__section_title }>Usuarios</div>
		    	<div className={ styles.footer__section_subtitle }>Ingresar</div>
		    	<div className={ styles.footer__section_subtitle }>Registrarse</div>
		    </div>
		    <div className={ styles.footer__section_container }>
		    	<div className={ styles.footer__section_title }>Administradores</div>
		    	<div className={ styles.footer__section_subtitle }>Ingresar</div>
		    </div>
		    <div className={ styles.footer__section_container }>
		    	<div className={ styles.footer__section_title }>Team Paby</div>
		    	<div className={ styles.footer__section_subtitle }>Contáctanos</div>
		    	<div className={ styles.footer__section_subtitle }>Acerca de nosotros</div>
		    </div>
		</div>
	);
};

export default Footer;