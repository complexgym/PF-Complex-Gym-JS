export default function About() {
	return (
		<div className='grid px-16 '>
			{/*Seccion 1*/}
			<div className='grid md:grid-cols-2 items-center justify-center'>
				{/*Text*/}
				<div className=' text-center pr-[10%] items row-start-2 row-end-3 md:row-start-1 md:row-end-2'>
					<h1 className=''>Sobre Nosotros</h1>
					<p className='font-normal text-base leading-6 text-gray-600'>
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
				<div className='h-screen w-full '>
					<img
						className='w-full rounded-3xl '
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679073922/IMG-20230301-WA0052_ouc60i.jpg'
						alt='A group of People'
					/>
				</div>
				{/*Text*/}
				<div className='pl-[10%] text-center'>
					<h1 className=''>¿Qué es para nosotros el movimiento?</h1>
					<p className='font-normal text-base leading-6 text-gray-600 '>
						Es la manera de comunicarnos y de vivir la vida a través de nuestro cuerpo. A
						través de él encontramos bienestar físico, logros deportivos, y por sobre
						todo: salud. Estamos hechos para movernos, sólo tenemos que encontrar nuestra
						actividad.
					</p>
				</div>
				{/*Mobile*/}
				<div className='h-screen w-full '>
					<img
						className='w-full rounded-3xl '
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679073922/IMG-20230301-WA0052_ouc60i.jpg'
						alt='A group of People'
					/>
				</div>
			</div>
			{/*Seccion 3*/}
			<div className='grid md:grid-cols-2 items-center justify-center pt-28'>
				{/*Text*/}
				<div className=' text-center pr-[10%] items'>
					<h1 className=''>
						No hace falta que seas un experto, nosotros podemos guiarte!
					</h1>
					<p className='font-normal text-base leading-6 text-gray-600 '>
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
			<div className='grid md:grid-cols-3 items-center justify-center pt-28 pl-[10%] pb-10'>
				{/*Julieta*/}
				<div className='grid-rows-2'>
					<div className="items-center justify-center">
					<img
						className='rounded-full w-80 h-80 object-cover'
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679169671/Julieta_ew0lel.png'
						alt='Julieta'
					/>
					</div>
					<div className="text-center pr-[40%]">
					<h1 >Julieta:</h1>
					<p>Profesora de educación física, entrenadora y antropometrista.</p>
					</div>
				</div>

				{/*Agustin*/}
				<div className="items-center justify-center">
					<img
						className='rounded-full w-80 h-80 object-cover'
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679169671/agustin_phiigk.png'
						alt='Agustin'
					/>
					<h1 className="text-center pr-[40%]">Agustín:</h1>
					<p className="pr-[35%] text-center">Profesor de Educación física, entrenador, masoterapeuta, antropometrista y
						deportista.</p>
				</div>

				{/*Leonardo*/}
				<div className="items-center justify-center">
					<img
						className=' rounded-full w-80 h-80 object-cover '
						src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679169671/Leonardo_ygjvby.png'
						alt='Leonardo'
					/>
					<h1 className="text-center pr-[35%]">Leonardo:</h1>
					<p className="text-center  pr-[35%]">Profesor de educación física, entrenador y deportista.</p>
				</div>
			</div>
		</div>
	);
}
