import styles from './UserProfile.module.css';

const UserProfile = () => {
	return (
		<div className={ styles.userProfile__container }>
			<img src='/images/user-image.png' alt='User image' className={ styles.userProfile__image } />
			<div>Editar Perfil</div>
			<div>Mis vehículos</div>
			<div>Reservas actuales</div>
			<div>Historial de reservas</div>
			<div>Métodos de pago</div>
			<div>Soporte</div>
			<button>HACER RESERVA</button>
			<button>CERRAR SESIÓN</button>
		</div>
	);
};

export default UserProfile;