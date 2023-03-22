import image from '../../assets/image/demoFigma1.jpg';
import Carrousel from '../Carrousel/Carrousel';
import Testimonials from '../Testimonials/Testimonials';
import {PlansHome} from '../Plans/Plans';
import '../../styles/whatsapp.css'

export default function Home() {
	const openWpp = () => {
		window.open(
			'https://api.whatsapp.com/send?phone=543442480617&text=%C2%A1Hola!%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20info%20sobre%20los%20entrenamientos%20semi-personalizados%20en%20COMPLEX%20%F0%9F%92%AA%F0%9F%8F%BB%F0%9F%8F%8B%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%8F%8B%F0%9F%8F%BB'
		);
	};

	return (
		<div>
			<div>
				{/* desktop */}
				<div className='z-20 absolute text-6xl hidden 2xl:block text-white w-1/2 top-1/2 left-36'>
					<h1 className='mb-10 text-5xl'>¿Qué es para nosotros? </h1>
					<p className='text-xl'>
						Es un centro de movimiento, especializado en preparación física deportiva,
						actividad física para la salud y estética. Contamos con valores muy sólidos
						con respecto a la formación y capacitación interna. No lo vendemos como una
						receta mágica, valoramos mucho la disciplina, constancia y dedicación
					</p>
				</div>

				<img src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1678822750/demoFigma1_ckzzli.jpg"} alt='' className='relative z-10 w-full pt-20 xl:pt-0' />

				{/* mobile */}
				<div className='z-20 block 2xl:hidden text-white bg-black pb-16'>
					<div className="w-10/12 mx-auto pt-8">
						<h1 className='mb-10 text-2xl  sm:text-3xl' >¿Qué es para nosotros? </h1>
						<p className='text-md md:text-lg'>
							Es un centro de movimiento, especializado en preparación física deportiva,
							actividad física para la salud y estética. Contamos con valores muy sólidos
							con respecto a la formación y capacitación interna. No lo vendemos como una
							receta mágica, valoramos mucho la disciplina, constancia y dedicación
						</p>
					</div>
				</div>
			</div>

			<Carrousel />
			<PlansHome/> 
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
	);
}
