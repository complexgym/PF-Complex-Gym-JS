import { Link } from 'react-router-dom';

export default function Footer() {
	const openIg = () => {
		window.open('https://www.instagram.com/complex.cdm/');
	};

	const openMap = () => {
		window.open(
			'https://www.google.com.ar/maps/place/C.+116+752,+Mercedes,+Provincia+de+Buenos+Aires/@-34.6665633,-59.4383424,230m/data=!3m1!1e3!4m5!3m4!1s0x95bc731ab794f239:0xaaa377d4b3bec8d8!8m2!3d-34.6665112!4d-59.438649?coh=164777&entry=tt&shorturl=1'
		);
	};

	const openHenry = () => {
		window.open('https://www.soyhenry.com/');
	};

	return (
		<div className='bg-black text-[#d6d6d6] font-sans flex flex-col w-full items-center pt-5 pb-5 '>
			{/* CONTACT */}
			<div className='flex'>
				<h1 className='text-2xl font-title tracking-widest text-white'>Contacto</h1>
			</div>

			{/* SECTION 1 */}
			<div className='flex 2xl:flex-row 2xl:justify-between 2xl:w-screen 2xl:px-40 xl:flex-row xl:justify-between xl:w-screen xl:px-40 md:flex-row md:justify-between md:w-screen md:px-30 mt-4 mb-4 xs:w-[85vw] xs:flex-col xs:gap-4'>
				{/* direcc */}
				<div className='flex xs:w-[100%] xs:justify-start'>
					<img
						className='w-5 h-6 mr-1'
						src={
							'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196394/location_ixacvq.png'
						}
					/>
					<label
						className='cursor-pointer underline md:text-[13px] xl:text-[16px] 2xl:text-[16px]'
						onClick={openMap}
					>
						Calle 114 entre 29 / 31
					</label>
				</div>

				{/* phone */}
				<div className='flex xs:w-[100%] xs:justify-center'>
					<img
						className='w-5 h-6 mr-1'
						src={
							'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196394/phone_zfwnlt.png'
						}
					/>
					<label className='md:text-[13px] xl:text-[16px] 2xl:text-[16px]'>
						+54 3442 48-0617
					</label>
				</div>

				{/* hours */}
				<div className='flex xs:w-[100%] xs:justify-start xl:justify-end'>
					<img
						className='w-5 h-6 mr-1'
						src={
							'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196394/time_dkrieu.png'
						}
					/>
					<label className='md:text-[13px] xl:text-[16px] 2xl:text-[16px]'>
						07-12 / 15-21 hs
					</label>
				</div>
			</div>
			{/* SECTION 2 */}
			<div className='flex 2xl:flex-row 2xl:justify-between 2xl:w-screen 2xl:px-40 xl:flex-row md:flex-row md:justify-between md:w-screen md:px-30 xl:justify-between xl:w-screen xl:px-40 mt-4 mb-4 xs:w-[85vw] xs:flex-col xs:gap-4'>
				<div className='flex xs:w-[100%] xs:justify-start'>
					<span className=' flex xs:flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row'>
						<Link to='/developers' className='lighter-blue cursor-pointer text-lg'>
							Desarrollado por
						</Link>
						<a
							href='/developers'
							className='pl-4 pt-2 fa fa-chevron-circle-right text-blue-600'
						/>
					</span>
				</div>

				<div className='flex xs:w-[100%] xs:justify-start xl:justify-end md:justify-end'>
					<div>
						<p>Síguenos:</p>
					</div>

					<div className='ml-2'>
						<i
							className='fa fa-instagram text-4 p-1 rounded-full cursor-pointer text-white bg-lighter-blue'
							aria-hidden='true'
							src={
								'https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196395/instagram_pozow5.png'
							}
							alt='instagram'
							onClick={openIg}
						></i>
					</div>
				</div>
			</div>
		</div>
	);
}
