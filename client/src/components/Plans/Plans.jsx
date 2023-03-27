import { useSelector } from 'react-redux';
import { useState } from 'react';
import SinglePlan from './SinglePlan';

//todo ALL PLANS
export default function Plans() {
	const [option, setOption] = useState('Todos');

	const plans = useSelector((s) => s.plans);

	return (
		<div className='bg-image-testimonials relative w-full h-full pb-8 font-text'>
			<div className='absolute hidden w-full lg:block h-96' />

			<div className='relative px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[85vw] md:px-24 lg:px-8 lg:py-8'>
				{/* initial msg */}
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
					<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
						<span className='relative inline-block'>
							<span className='relative uppercase text-black'>Planes actuales</span>
						</span>{' '}
					</h2>
				</div>

				{/* content */}
				<div className='mb-4 border-b border-gray-200 dark:border-gray-700'>
					{/* tabs */}
					<ul
						className='flex flex-wrap justify-center text-sm text-white font-medium text-center'
						id='myTab'
						data-tabs-toggle='#myTabContent'
						role='tablist'
					>
						<li className='mr-2' role='presentation'>
							<button
								className={`inline-block p-4 border-b-2 text-black rounded-t-lg ${
									option === 'Todos' && 'lighter-blue border-blue font-bold border-b-4'
								}`}
								onClick={() => setOption('Todos')}
							>
								Todos
							</button>
						</li>

						<li className='mr-2' role='presentation'>
							<button
								className={`inline-block p-4 border-b-2 text-black rounded-t-lg ${
									option === '2 por semana' &&
									'text-green-700 border-green-700 font-bold border-b-4'
								}`}
								onClick={() => setOption('2 por semana')}
							>
								2 por semana
							</button>
						</li>

						<li className='mr-2' role='presentation'>
							<button
								className={`inline-block p-4 border-b-2 text-black rounded-t-lg ${
									option === 'Libre' &&
									'text-yellow-400 border-yellow-400 font-bold  border-b-4'
								}`}
								onClick={() => setOption('Libre')}
							>
								Libre
							</button>
						</li>

						<li className='mr-2' role='presentation'>
							<button
								className={`inline-block p-4 border-b-2 text-black rounded-t-lg ${
									option === 'Otros' && 'text-slate-400 border-blue font-bold border-b-4'
								}`}
								onClick={() => setOption('Otros')}
							>
								Otros
							</button>
						</li>
					</ul>
				</div>
				<div className='grid max-w-screen row-gap gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:mx-auto'>
					{plans?.[option].map((plan) => {
						return <SinglePlan plan={plan} option={option} />;
					})}
				</div>
			</div>
			<div className='render-btn'></div>
		</div>
	);
}
