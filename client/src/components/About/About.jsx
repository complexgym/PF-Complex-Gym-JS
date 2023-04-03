import { useDispatch } from 'react-redux';
import TrainerCard from '../TrainerCard/TrainerCard';
import { useEffect } from 'react';
import { getTrainers } from '../../redux/actions/actions';

export default function About() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrainers());
	}, []);

	return (
		<div className='2xl:px-8 xl:px-8 lg:px-8 font-text overflow-hidden xs:p-4'>
			{/*Seccion 1*/}
			<div className='flex flex-row flex-wrap justify-center'>
				{/*Img*/}
				<div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] grid place-self-center xs:w-[70%]'>
					<img
						className='rounded-3xl'
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679166413/complexlogo_cmb03x.png'
						alt='A group of People'
					/>
				</div>
				{/*Text*/}
				<div className='flex flex-col  items-center '>
					<h1 className='font-bold font-title 2xl:text-4xl xl:text-4xl lg:text-4xl  pb-8  tracking-widest w-fit xs:text-center xs:text-2xl'>
						Sobre Nosotros
					</h1>
					<p className=' flex font-normal leading-6 text-gray-600 text-center 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl xs:text-lg'>
						Complex nació de una pasión compartida entre Juli y Agus en el año 2016. Con
						otro nombre y otro lugar de residencia, la esencia de Complex fue desde su
						inicio llevar el movimiento a todas las personas. Con el tiempo llegó Leo, que
						vió en Complex la pasión por el conocimiento, la capacitación constante y los
						deseos de mejorar día a día.
					</p>
				</div>
			</div>
			{/*Seccion 2*/}
			<div className='grid md:grid-cols-2 items-center justify-center mt-10 bg-black rounded-3xl '>
				{/*Desktop*/}
				{/*Img*/}
				<div className=''>
					<img
						className='w-full rounded-tl-3xl rounded-tr-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-br-0'
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679073922/IMG-20230301-WA0052_ouc60i.jpg'
						alt='A group of People'
					/>
				</div>
				{/*Text*/}
				<div className='px-10 text-center'>
					<h1 className='font-title 2xl:text-4xl xl:text-4xl lg:text-4xl pb-8  tracking-widest text-[#fcfcfc] md:text-2xl xs:text-xl xs:mt-5'>
						¿Qué es para nosotros el movimiento?
					</h1>
					<p className='font-normal leading-6 text-[#b8b8b8] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg xs:text-lg xs:mb-5'>
						Es la manera de comunicarnos y de vivir la vida a través de nuestro cuerpo. A
						través de él encontramos bienestar físico, logros deportivos, y por sobre
						todo: salud. Estamos hechos para movernos, sólo tenemos que encontrar nuestra
						actividad.
					</p>
				</div>
			</div>
			{/*Seccion 3*/}
			<div className='grid md:grid-cols-2 items-center justify-center mt-10 bg-[#231F20] rounded-3xl'>
				{/*Text*/}
				<div className='px-10 text-center '>
					<h1 className='font-title 2xl:text-4xl xl:text-4xl lg:text-4xl pb-8  tracking-widest text-[#fcfcfc] md:text-2xl xs:text-xl xs:mt-5'>
						No hace falta que seas un experto, nosotros podemos guiarte!
					</h1>
					<p className='font-normal leading-6 text-[#b8b8b8] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg xs:text-lg xs:mb-5'>
						En complex todos son bienvenidos, no hace falta tener experiencia o saber cómo
						realizar los ejercicios. Acá dentro siempre va a haber un guía esperando
						ayudarte.
					</p>
				</div>
				{/*Img*/}
				<div className=''>
					<img
						className='rounded-bl-3xl rounded-br-3xl md:rounded-br-3xl md:rounded-tr-3xl md:rounded-tl-0 md:rounded-bl-0'
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679167386/IMG-20230317-WA0023_nvamgh.jpg'
						alt='A group of People'
					/>
				</div>
			</div>
			{/*Seccion 4*/}
			<div className='items-center justify-center my-10 rounded-3xl py-30 bg-[#030303] xs:py-10'>
				<h1 className='text-center font-title  2xl:text-4xl xl:text-4xl lg:text-4xl pb-8 tracking-widest text-white xs:text-xl xs:pb-0'>
					Nuestros Entrenadores
				</h1>
				<TrainerCard />
			</div>
		</div>
	);
}
//