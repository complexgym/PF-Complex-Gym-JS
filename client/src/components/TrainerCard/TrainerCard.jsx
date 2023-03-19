export default function TrainerCard() {
	const cards = [
		{
			name: "Julieta",
			text: "Profesora de educación física, entrenadora y antropometrista.",
			image:
				"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679235505/juelieta2_y6kcda.png",
		},
		{
			name: "Agustin",
			text: "Profesor de Educación física, entrenador, masoterapeuta, antropometrista y deportista.",
			image:
				"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679235505/agustin2_hft7ug.png",
		},
		{
			name: "Leonardo",
			text: "Profesor de educación física, entrenador y deportista.",
			image:
				"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679235505/leonardo2_eqkvlw.png",
		},
	];
	return (
		<div className='flex flex-row justify-center items-center'>
			{cards.map((card) => {
				return (
					<div className='relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-zinc-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none'>
						<div className='relative flex h-32 w-full justify-center rounded-xl bg-cover'>
							<img
								src='https://us.123rf.com/450wm/kmkruthila/kmkruthila2207/kmkruthila220706882/188791605-arte-vectorial-de-fondo-de-l%C3%ADneas-brillantes-diagonales-azul-oscuro.jpg?ver=6'
								class='absolute flex h-32 w-full justify-center rounded-xl bg-cover'
							/>
							<div className='absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700'>
								<img className='h-[100%] w-[100%] rounded-full' src={card.image} alt='' />
							</div>
						</div>
						<div className='mt-16 flex flex-col items-center'>
							<h4 className='text-2xl font-bold text-navy-700 dark:text-black'>
								{card.name}
							</h4>
						</div>
						<div className='mt-6 mb-3 flex'>
							<div className='text-center'>
								<p className='text-lg font-normal text-slate-900'> {card.text} </p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
