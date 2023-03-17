import ig from '../../assets/footer/instagram.png';
import location from '../../assets/footer/location.png';
import email from '../../assets/footer/email.png';
import phone from '../../assets/footer/phone.png';
import time from '../../assets/footer/time.png';

export default function Footer() {
	const openWpp = () => {
		window.open(
			'https://api.whatsapp.com/send?phone=543442480617&text=%C2%A1Hola!%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20info%20sobre%20los%20entrenamientos%20semi-personalizados%20en%20COMPLEX%20%F0%9F%92%AA%F0%9F%8F%BB%F0%9F%8F%8B%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%8F%8B%F0%9F%8F%BB'
		);
	};

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
		<div className='nav-footer flex flex-col w-full items-center pt-10 pb-6'>
			<div className='section-top flex'>
				<h1 className='text-2xl'>Contacto</h1>
			</div>

			<div
				className='section-bottom grid grid-cols-2 w-4/5 gap-4 my-4
            md:flex justify-between'
			>
				<div className='flex'>
					<img className='w-5 h-6 mr-1' src={location} />
					<label className='cursor-pointer underline' onClick={openMap}>
						Calle 114 entre 29 / 31
					</label>
				</div>

				<div className='flex w-full justify-end md:w-auto'>
					<img className='w-5 h-6 mr-1' src={email} />
					<label>Email</label>
				</div>

				<div className='flex'>
					<img className='w-5 h-6 mr-1' src={phone} />
					<label>+54 3442 48-0617</label>
				</div>

				<div className='flex w-full justify-end md:w-auto'>
					<img className='w-5 h-6 mr-1' src={time} />
					<label>07-12 / 15-21 hs</label>
				</div>
			</div>

			<div className='section-bottom w-4/5 flex justify-between'>
				<div>
					<p>
						Creada por alumnos de
						<label className='lighter-blue cursor-pointer' onClick={openHenry}>
							Soy Henry
						</label>
					</p>
				</div>

				<div className='flex'>
					<div>
						<p>Síguenos:</p>
					</div>

					<div className='ml-2'>
						<img
							className='w-8 cursor-pointer'
							src={ig}
							alt='instagram'
							onClick={openIg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
