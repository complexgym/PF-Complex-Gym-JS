export default function About() {
	return (
		<div>
			<div>
				<div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
					<div className='flex flex-col lg:flex-row justify-between gap-8'>
                       
						<div className='w-full lg:w-5/12 flex flex-col justify-center pt-28'>
							<h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>
								Sobre Nosotros
							</h1>
							<p className='font-normal text-base leading-6 text-gray-600 flex'>
								Complex nació de una pasión compartida entre Juli y Agus en el año 2016.
								Con otro nombre y otro lugar de residencia, la esencia de Complex fue
								desde su inicio llevar el movimiento a todas las personas. Con el tiempo
								llegó Leo, que vió en Complex la pasión por el conocimiento, la
								capacitación constante y los deseos de mejorar día a día.
							</p>
						</div>
						<div className='w-full h-[850px] lg:w-8/12 '>
							<img
								className='w-full'
								src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679014951/IMG-20221214-WA0013_em9erm.jpg'
								alt='A group of People'
							/>
						</div>
					</div>

					<div className='flex lg:flex-row flex-col justify-end gap-8 pt-12'>
                        {/* Desktop */}
						<div className='w-full h-[1100px] lg:w-8/12 hidden lg:block '>
							<img
								className='w-full '
								src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679073922/IMG-20230301-WA0052_ouc60i.jpg'
								alt='A group of People'
							/>
						</div>
						<div className='lg:w-5/12 flex flex-col justify-center text-left w-screen'>
							<h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>
								¿Qué es para nosotros el movimiento?
							</h1>
							<p className='font-normal text-base leading-6 text-gray-600 '>
								Es la manera de comunicarnos y de vivir la vida a través de nuestro
								cuerpo. A través de él encontramos bienestar físico, logros deportivos, y
								por sobre todo: salud. Estamos hechos para movernos, sólo tenemos que
								encontrar nuestra actividad.
							</p>
						</div>
                        {/* Mobile */}
						<div className='w-full h-[800px] lg:w-8/12 block lg:hidden'>
							<img
								className='w-full '
								src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679073922/IMG-20230301-WA0052_ouc60i.jpg'
								alt='A group of People'
							/>
						</div>
					</div>

					<div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
						<div className='flex flex-col lg:flex-row justify-between gap-8'>
							<div className='w-full lg:w-5/12 flex flex-col justify-center'>
								<h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>
									No hace falta que seas un experto, nosotros podemos guiarte!
								</h1>
								<p className='font-normal text-base leading-6 text-gray-600 '>
									En complex todos son bienvenidos, no hace falta tener experiencia o
									saber cómo realizar los ejercicios. Acá dentro siempre va a haber un
									guía esperando ayudarte.
								</p>
							</div>
							<div className='w-full h-[800px] lg:w-8/12'>
								<img
									className='w-full '
									src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679014951/IMG-20221214-WA0013_em9erm.jpg'
									alt='A group of People'
								/>
							</div>
						</div>

						<div className='flex lg:flex-row flex-col justify-end gap-8'>
                            {/* Desktop */}
							<div className='w-full h-[800px] lg:w-8/12 hidden lg:block'>
								<img
									className='w-full '
									src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679014951/IMG-20221214-WA0013_em9erm.jpg'
									alt='A group of People'
								/>
							</div>
							<div className='lg:w-5/12 flex flex-col justify-center text-left w-screen'>
								<h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>
									Que mejor que sepas en que nos especializamos cada uno
								</h1>
								<p className='font-normal text-base leading-6 text-black'>
									<h1>Agustín:</h1>
									Profesor de Educación física, entrenador, masoterapeuta, antropometrista
									y deportista.
								</p>
								<h1>Julieta:</h1>
								<p> Profesora de educación física, entrenadora y antropometrista.</p>
								<h1>Leonardo:</h1>
								<p> Profesor de educación física, entrenador y deportista.</p>
							</div>
                            {/* Mobile */}
							<div className='w-full h-[800px] lg:w-8/12 block lg:hidden'>
								<img
									className='w-full '
									src='https://res.cloudinary.com/dpxucxgwg/image/upload/v1679014951/IMG-20221214-WA0013_em9erm.jpg'
									alt='A group of People'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
