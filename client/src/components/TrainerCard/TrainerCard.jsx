import { useSelector } from 'react-redux';
import image from '../../assets/img/dumbelldBgd.jpg';

export default function TrainerCard() {
	const trainers = useSelector((state) => state.trainers);
	return (
		// <div className='grid md:grid-cols-2 w-screen xl:grid-cols-3 xl:w-11/12 2xl:w-9/12 gap-16 mx-auto items-center'>
		<div className='flex flex-row flex-wrap 2xl:gap-10 xl:gap-10 lg:gap-10 2xl:p-10 xl:p-10 lg:p-10 xs:p-5 xs:gap-5'>
			{trainers.map((trainer) => {
				return (
					<div className='relative flex flex-col items-center rounded-[20px] 2xl:w-[400px] xl:w-[350px] lg:w-[320px] md:w-[330px] mx-auto p-4 bg-zinc-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none xs:h-[350px]'>
						<div className='relative flex h-32 w-full justify-center rounded-xl bg-cover '>
							<div
								class='absolute flex h-32 w-full justify-center rounded-xl bg-center bg-cover'
								style={{
									backgroundImage: `url(${image})`,
								}}
							></div>
							<div className='absolute -bottom-12 flex  2xl:w-[40%]  xl:w-[40%] lg:w-[40%] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700 xs:w-[50%]'>
								<img className='rounded-full' src={trainer?.picture} alt='' />
							</div>
						</div>
						<div className='2xl:mt-16 xl:mt-16 lg:mt-16 flex flex-col items-center xs:mt-12'>
							<h4 className='text-2xl font-bold text-[#000000] dark:text-black'>
								{trainer?.name}
							</h4>
						</div>
						<div className='flex 2xl:mt-6  xl:mt-6 lg:mt-6 mb-3 xs:mt-2'>
							<div className='text-center'>
								{/* <p className='text-lg font-normal text-[#2c2c2c]'>{trainer?.mail} </p> */}
								<p className='text-lg font-normal text-[#2c2c2c]'>
									{trainer?.name==="Leonardo" && "Profesor de educación física, entrenador y deportista."}
									{trainer?.name==="Julieta" && "Profesora de educación física, entrenadora y antropometrista."}
									{trainer?.name==="Agustín" && " Profesor de Educación física, entrenador, masoterapeuta, antropometrista y deportista"}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
