import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { generateDate, months } from './funcionCalendar';
import cn from './cn';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { getCalendar } from '../../redux/actions/actions';

export default function Calendar() {
	const dispatch = useDispatch();

	const days = ['D', 'L', 'M', 'M', 'J', 'V	', 'S'];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	const allCalendar = useSelector((state) => state.allCalendar);
	const month = selectDate?.['$M'];
	const year = selectDate?.['$y'];
	const day = selectDate?.['$D'];
	const filter = allCalendar.filter((c) => {
		return c.month === month + 1 && c.year === year && c.day === day;
	});

	useEffect(() => {
		dispatch(getCalendar());
	}, []);

	return (
		<div className='w-screen bg-slate-100'>
			<div className='flex sm:gap-20 gap-24 2xl:gap-0 sm:divide-x justify-center sm:w-1/2 mx-auto w-screen h-screen sm:flex-row flex-col bg-slate-100 pt-12'>
				<div className='w-screen h-96'>
					<div className='flex justify-between items-center text-xl pb-8'>
						<h1 className='select-none font-semibold'>
							{months[today.month()]}, {today.year()}
						</h1>
						<div className='flex gap-10 items-center'>
							<GrFormPrevious
								className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
								onClick={() => {
									setToday(today.month(today.month() - 1));
								}}
							/>
							<h1
								className='cursor-pointer hover:scale-105 transition-all'
								onClick={() => {
									setToday(currentDate);
								}}
							>
								Ir a Día Actual
							</h1>
							<GrFormNext
								className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
								onClick={() => {
									setToday(today.month(today.month() + 1));
								}}
							/>
						</div>
					</div>
					<div className='grid grid-cols-7  pb-8 justify-items-center items-center'>
						{days.map((day, index) => {
							return (
								<h1
									key={index}
									className='grid text-center md:h-14 md:w-14 md:text-xl text-[#1d459d] select-none font-bold'
								>
									{day}
								</h1>
							);
						})}
					</div>

					<div className=' grid grid-cols-7 pt-4 md:w-[65vw] md:h-[65vh]'>
						{generateDate(today.month(), today.year()).map(
							({ date, currentMonth, today }, index) => {
								return (
									<div
										key={index}
										className='p-2 md:text-center h-14 grid place-content-center text-xl border-t drop-shadow-2xl'
									>
										<h1
											className={cn(
												currentMonth ? '' : 'text-gray-400',
												today ? 'bg-[#1d459d] text-white' : '',
												selectDate.toDate().toDateString() ===
													date.toDate().toDateString()
													? 'bg-[#4c5259] text-white'
													: '',
												'h-6 w-6 text-center rounded-full grid md:place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none text-sm font-medium md:text-lg md:h-10 md:w-10'
											)}
											onClick={() => {
												setSelectDate(date);
											}}
										>
											{date.date()}
										</h1>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div className='h-96 md:w-96 sm:px-5 w-full'>
					<h1 className='font-semibold bg-[#4a78ad]  md:m-4 md:p-4 text-2xl md:w-96 bg-opacity-80 md:rounded-6 mx-2 rounded-2 py-2 my-2 px-3 '>
						Actividades para {selectDate.toDate().toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' })}
					</h1>

					{filter?.length === 0 ? (
						<p className='bg-[#4c5259] md:m-4 md:p-4 md:text-xl md:w-96 text-center bg-opacity-60 md:rounded-6 text-sm mx-2 rounded-2 py-2 my-2 '>
							No hay actividades hoy
						</p>
					) : (
						filter?.map((e) => {
							return (
								<p className='bg-[#4c5259] md:m-4 md:p-4 md:text-xl md:w-96 text-center bg-opacity-60 md:rounded-6 text-sm mx-2 rounded-2 py-2 my-2 '>
									{e?.hour} - {e?.classes}
								</p>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}
