'use client';

import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Home = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push('/login');
	}

	return (
		<div className={ styles.home__container }>
		    <button type='button' onClick={ handleClick }>HACER RESERVA</button>
		</div>
	);
};

export default Home;