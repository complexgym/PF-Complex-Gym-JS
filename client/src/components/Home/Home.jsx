import React, { useState, useEffect } from 'react';
import image from '../../assets/image/demoFigma1.jpg';
import Carrousel from '../Carrousel/Carrousel';
import Testimonials from '../Testimonials/Testimonials';
import '../../styles/whatsapp.css';
import Loading from '../Loading/Loading';

export default function Home() {
	const openWpp = () => {
		window.open(
			'https://api.whatsapp.com/send?phone=543442480617&text=%C2%A1Hola!%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20info%20sobre%20los%20entrenamientos%20semi-personalizados%20en%20COMPLEX%20%F0%9F%92%AA%F0%9F%8F%BB%F0%9F%8F%8B%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%8F%8B%F0%9F%8F%BB'
		);
	};
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 3000);
	}, []);

	return (
		<div>
			{!isLoading && <Loading />}
			{isLoading && (
				<div>
					<img src={image} alt='' className='relative w-full' />

					<div className='absolute text-6xl text-white w-1/2 top-1/2 left-36 '>
						<h1 className='mb-10'>Qué es para nosotros? </h1>
						<p className='text-2xl'>
							Es un centro de movimiento, especializado en preparación física deportiva,
							actividad física para la salud y estética. Contamos con valores muy sólidos
							con respecto a la formación y capacitación interna. No lo vendemos como una
							receta mágica, valoramos mucho la disciplina, constancia y dedicación
						</p>
					</div>

					<Carrousel />

					<Testimonials />

					<div className='whatsapp ml-4'>
						<div
							className='phone-call cbh-phone cbh-green cbh-show  cbh-static'
							id='clbh_phone_div'
						>
							<button
								id='WhatsApp-button'
								className='phoneJs'
								title='WhatsApp 360imagem'
								onClick={openWpp}
							>
								<div className='cbh-ph-circle'></div>
								<div className='cbh-ph-circle-fill'></div>
								<div className='cbh-ph-img-circle1'></div>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
