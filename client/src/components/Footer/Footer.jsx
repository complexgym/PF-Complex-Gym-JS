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
		<div className='nav-footer font-mono flex flex-col w-full items-center pt-10 pb-6'>
			<div className='section-top flex'>
				<h1 className='text-2xl font-title underline'>Contacto</h1>
			</div>

			<div
				className='section-bottom grid grid-cols-2 w-4/5 gap-4 my-4
            md:flex justify-between'
			>
				<div className='flex'>
					<img className='w-5 h-6 mr-1' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196394/location_ixacvq.png"} />
					<label className='cursor-pointer underline' onClick={openMap}>
						Calle 114 entre 29 / 31
					</label>
				</div>

				<div className='flex w-full justify-end md:w-auto'>
					<img className='w-5 h-6 mr-1' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196395/email_zfgv3n.png"} />
					<label>Email</label>
				</div>

				<div className='flex'>
					<img className='w-5 h-6 mr-1' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196394/phone_zfwnlt.png"} />
					<label>+54 3442 48-0617</label>
				</div>

				<div className='flex w-full justify-end md:w-auto'>
					<img className='w-5 h-6 mr-1' src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196394/time_dkrieu.png"} />
					<label>07-12 / 15-21 hs</label>
				</div>
			</div>

			<div className='section-bottom w-4/5 flex justify-between'>
				<div>
					<span>
						Creada por alumnos de&nbsp; {/* space */}
						<span className='lighter-blue cursor-pointer' onClick={openHenry}>
							Soy Henry
						</span>
					</span>
				</div>

				<div className='flex'>
					<div>
						<p>Síguenos:</p>
					</div>

					<div className='ml-2'>
						<img
							className='w-8 cursor-pointer'
							src={"https://res.cloudinary.com/dpxucxgwg/image/upload/v1679196395/instagram_pozow5.png"}
							alt='instagram'
							onClick={openIg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
