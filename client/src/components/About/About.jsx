import TrainerCard from "../TrainerCard/TrainerCard";

export default function About() {
	return (
		<div className='grid px-16 '>
			{/*Seccion 1*/}
			<div className='grid md:grid-cols-2 items-center justify-center pt-16'>
				{/*Text*/}
				<div className='text-center pr-[10%] items row-start-2 row-end-3 md:row-start-1 md:row-end-2'>
					<h1 className='font-bold text-6xl pb-8 italic tracking-widest'>Sobre Nosotros</h1>
					<p className='font-normal leading-6 text-gray-600 text-2xl'>
						Complex nació de una pasión compartida entre Juli y Agus en el año 2016. Con
						otro nombre y otro lugar de residencia, la esencia de Complex fue desde su
						inicio llevar el movimiento a todas las personas. Con el tiempo llegó Leo, que
						vió en Complex la pasión por el conocimiento, la capacitación constante y los
						deseos de mejorar día a día.
					</p>
				</div>
				{/*Img*/}
				<div>
					<img
						className='w-full rounded-3xl'
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679166413/complexlogo_cmb03x.png'
						alt='A group of People'
					/>
				</div>
			</div>
			{/*Seccion 2*/}
			<div className='grid md:grid-cols-2 items-center justify-center'>
				{/*Desktop*/}
				{/*Img*/}
				<div className=''>
					<img
						className='w-full rounded-3xl '
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679073922/IMG-20230301-WA0052_ouc60i.jpg'
						alt='A group of People'
					/>
				</div>
				{/*Text*/}
				<div className='pl-[10%] text-center'>
					<h1 className='font-bold text-6xl pb-8 italic tracking-widest'>¿Qué es para nosotros el movimiento?</h1>
					<p className='font-normal leading-6 text-gray-600 text-2xl '>
						Es la manera de comunicarnos y de vivir la vida a través de nuestro cuerpo. A
						través de él encontramos bienestar físico, logros deportivos, y por sobre
						todo: salud. Estamos hechos para movernos, sólo tenemos que encontrar nuestra
						actividad.
					</p>
				</div>
			</div>
			{/*Seccion 3*/}
			<div className='grid md:grid-cols-2 items-center justify-center '>
				{/*Text*/}
				<div className=' text-center pr-[10%] items row-start-2 row-end-3 md:row-start-1 md:row-end-2'>
					<h1 className='font-bold text-6xl pb-8 italic tracking-widest'>
						No hace falta que seas un experto, nosotros podemos guiarte!
					</h1>
					<p className='font-normal leading-6 text-gray-600 text-2xl '>
						En complex todos son bienvenidos, no hace falta tener experiencia o saber cómo
						realizar los ejercicios. Acá dentro siempre va a haber un guía esperando
						ayudarte.
					</p>
				</div>
				{/*Img*/}
				<div className=''>
					<img
						className='rounded-3xl '
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679167386/IMG-20230317-WA0023_nvamgh.jpg'
						alt='A group of People'
					/>
				</div>
			</div>
			{/*Seccion 4*/}
			<div className='items-center justify-center py-20'>
				<h1 className="text-center py-12 font-bold text-6xl pb-8 italic tracking-widest">Nuestros Entrenadores</h1>
				<TrainerCard />
			</div>
		</div>
	);
}
