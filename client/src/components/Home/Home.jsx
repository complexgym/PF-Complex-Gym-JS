import Carrousel from '../Carrousel/Carrousel';
import Testimonials from '../Testimonials/Testimonials';
import PlansHome from '../Plans/PlansHome';
import '../../styles/whatsapp.css';
import style from './style.module.css';

export default function Home({ user, isAuthenticated }) {
	const openWpp = () => {
		window.open(
			'https://api.whatsapp.com/send?phone=543442480617&text=%C2%A1Hola!%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20info%20sobre%20los%20entrenamientos%20semi-personalizados%20en%20COMPLEX%20%F0%9F%92%AA%F0%9F%8F%BB%F0%9F%8F%8B%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%8F%8B%F0%9F%8F%BB'
		);
	};

	return (
		<div>
			<div>
				{/* desktop */}
				<div className='z-20 absolute text-6xl hidden 2xl:block xl:block text-white w-1/2 top-1/2 left-36 bg-[#231f20] bg-opacity-40 p-6 rounded-4 drop-shadow-2xl '>
					<h1 className='mb-10 text-5xl text-white font-title tracking-wider'>
						¿Qué es para nosotros?
					</h1>
					<p className='text-xl'>
						Es un centro de movimiento, especializado en preparación física deportiva,
						actividad física para la salud y estética. Contamos con valores muy sólidos
						con respecto a la formación y capacitación interna. Valoramos mucho la
						disciplina, constancia y dedicación.
					</p>
				</div>

				<img
					src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196392/demoFigma1_qwnnex.jpg '
					alt=''
					className='relative z-10 w-full  xl:pt-0 brightness-50'
				/>

				{/* mobile */}
				<div className='z-20 block 2xl:hidden xl:hidden text-[#d3d3d3] bg-black pb-16'>
					<div className='w-10/12 mx-auto pt-8'>
						<h1 className='mb-10 text-5xl text-white font-title tracking-wider xs:text-2xl'>
							¿Qué es para nosotros?
						</h1>
						<p className='text-md md:text-lg xs:text-sm'>
							Es un centro de movimiento, especializado en preparación física deportiva,
							actividad física para la salud y estética. Contamos con valores muy sólidos
							con respecto a la formación y capacitación interna. Valoramos mucho la
							disciplina, constancia y dedicación.
						</p>
					</div>
				</div>
			</div>

			<div className={style.lineBlue}></div>

			<Carrousel />

			<div className={style.lineBlue}></div>

			<PlansHome />

			<div className={style.lineBlue}></div>

			<Testimonials user={user} isAuthenticated={isAuthenticated} />

			<a href='' className='btn-whatsapp-pulse' onClick={openWpp} target='_blank'>
				<i className='fab fa-whatsapp'></i>
			</a>
		</div>
	);
}
