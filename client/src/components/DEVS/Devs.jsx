import React from 'react';
import inImg from '../../assets/icons/linkedin.png';
import igImg from '../../assets/icons/instagram.png';
import gitImg from '../../assets/icons/github.png';

const Devs = () => {
	const devs = [
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Alejo',
			lastName: 'Fariña',
			email: 'scaramouch11@gmail.com',
			country: 'Argentina',
			about: 'Team Back',
			ig: '',
			git: 'https://github.com/AAlejof',
			linkedin: 'https://www.linkedin.com/in/aalejof/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Anthony',
			lastName: 'Guzman',
			email: 'anthonyjgr28@gmail.com',
			country: 'Chile',
			about: 'Team Front',
			ig: '',
			git: 'https://github.com/Anthonyjgr',
			linkedin: 'https://www.linkedin.com/in/anthony-guzman-840449135/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Esteban',
			lastName: 'Marín',
			email: 'mrtban.dev@gmail.com',
			country: 'Colombia',
			about: 'Team Front',
			ig: '',
			git: 'https://github.com/MrTban',
			linkedin: 'https://www.linkedin.com/in/mrtban/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Martín',
			lastName: 'Couadeau',
			email: 'martin_couadeau1@hotmail.com',
			country: 'Argentina',
			about: 'Team Back',
			ig: '',
			git: 'https://github.com/MartinCouadeau',
			linkedin: 'https://www.linkedin.com/in/martin-couadeau-ba57541bb/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Mauricio',
			lastName: 'Lobo',
			email: 'ezequiellobo259@gmail.com',
			country: 'Argentina',
			about: 'Team Front',
			ig: '',
			git: 'https://github.com/BudaKhan',
			linkedin: 'https://www.linkedin.com/in/mauricio-lobo-a863a5265/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Nicolás',
			lastName: 'Von Mühlinen',
			email: 'nicovon24@gmail.com',
			country: 'Argentina',
			about: 'Team Front',
			ig: '',
			git: 'https://github.com/nicovon24',
			linkedin: 'https://www.linkedin.com/in/nicolas-von-muhlinen/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Sebastián',
			lastName: 'Rodrigo',
			email: 'sebrocp.2002@gmail.com',
			country: 'Argentina',
			about: 'Team Back',
			ig: '',
			git: 'https://github.com/WarriorDeveloper',
			linkedin:
				'https://www.linkedin.com/in/sebasti%C3%A1n-jorge-rodrigo-godoy-a594471b7/',
		},
		{
			image:
				'https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true',
			name: 'Yosemar',
			lastName: 'Castillo',
			email: 'Yojecava@outlook.com',
			country: 'México',
			about: 'Team Back',
			ig: '',
			git: 'https://github.com/yositec',
			linkedin: 'https://www.linkedin.com/in/yosemar-de-jesus-castillo-valderrama/',
		},
	];

	return (
		<div className='mx-16 mt-16 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
			{devs.map((dev) => (
				<div className='relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'>
					<div className='px-6'>
						<div className='flex flex-wrap justify-center'>
							<div className='w-full flex justify-center'>
								<div className='relative'>
									<img
										src={dev?.image}
										className='shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
									/>
								</div>
							</div>

							{/* SOCIAL */}
							<div className='w-full text-center mt-20'>
								<div className='flex justify-center lg:pt-4 pt-8 pb-0'>
									{/* LINKEDIN */}
									<div className='p-3 text-center'>
										<a href={dev?.linkedin}>
											<img src={inImg} alt='Linkedin' className='w-6' />
										</a>
									</div>
									{/* GITHUB */}
									<div className='p-3 text-center'>
										<a href={dev?.git}>
											<img src={gitImg} alt='GitHub' className='w-6' />
										</a>
									</div>
									{/* INSTAGRAM */}
									<div className='p-3 text-center'>
										<a href={dev?.ig}>
											<img src={igImg} alt='Ig' className='w-6' />
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* INFO */}
						<div className='text-center mt-2'>
							{/* NAME - LASTNAME */}
							<h3 className='text-2xl text-slate-700 font-bold leading-normal mb-1'>
								{dev?.name} {dev?.lastName}
							</h3>
							<div className='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
								{/* EMAIL */}
								<h4 className='mr-2 text-slate-400 opacity-75'>{dev?.email}</h4>
								{/* COUNTRY */}
								<i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75'>
									&nbsp;{dev?.country}
								</i>
							</div>
						</div>
						{/* ABOUT */}
						<div className='mt-6 py-6 border-t border-slate-200 text-center'>
							<div className='flex flex-wrap justify-center'>
								<div className='w-full px-4'>
									<p className='font-light leading-relaxed text-slate-600 mb-4'>
										{dev?.about}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Devs;
