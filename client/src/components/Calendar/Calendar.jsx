import dayjs from 'dayjs';
import React, { useState } from 'react';
import { generateDate, months } from './funcionCalendar';
import cn from './cn';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useSelector } from 'react-redux';

export default function Calendar() {
	const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
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

	console.log(filter);
	return (
		<div className='w-screen bg-slate-100'>
			<div className='flex gap-24 sm:divide-x justify-center sm:w-1/2 mx-auto w-screen h-screen sm:flex-row flex-col bg-slate-100 pt-12'>
				<div className='w-screen h-96 '>
					<div className='flex justify-between items-center text-xl pb-8'>
						<h1 className='select-none font-semibold'>
							{months[today.month()]}, {today.year()}
						</h1>
						<div className='flex gap-10 items-center '>
							<GrFormPrevious
								className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
								onClick={() => {
									setToday(today.month(today.month() - 1));
								}}
							/>
							<h1
								className=' cursor-pointer hover:scale-105 transition-all'
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
					<div className='grid grid-cols-7 pb-8'>
						{days.map((day, index) => {
							return (
								<h1
									key={index}
									className='text-xl text-end h-14 w-14 grid place-content-end text-[#1d459d] select-none font-bold ml-9'
								>
									{day}
								</h1>
							);
						})}
					</div>

					<div className=' grid grid-cols-7 w-[65vw] h-[65vh] pt-4'>
						{generateDate(today.month(), today.year()).map(
							({ date, currentMonth, today }, index) => {
								return (
									<div
										key={index}
										className='p-2 text-center h-14 grid place-content-center text-sm border-t drop-shadow-2xl'
									>
										<h1
											className={cn(
												currentMonth ? '' : 'text-gray-400',
												today ? 'bg-[#1d459d] text-white' : '',
												selectDate.toDate().toDateString() ===
													date.toDate().toDateString()
													? 'bg-[#4c5259] text-white'
													: '',
												'h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none text-lg font-medium'
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
				<div className='h-96 w-96 sm:px-5 '>
					<h1 className='font-semibold bg-[#4a78ad]  m-4 p-4 text-2xl w-96 bg-opacity-80 rounded-6'>
						Actividades para {selectDate.toDate().toDateString()}
					</h1>

					{filter?.length === 0 ? (
						<p className='bg-[#4c5259]  m-4 p-4 text-xl w-96 text-center bg-opacity-60 rounded-6'>
							No hay reuniones para hoy
						</p>
					) : (
						filter?.map((e) => {
							return (
								<p className='bg-[#4c5259]  m-4 p-4 text-xl  w-96 text-center bg-opacity-60 rounded-6'>
									{e?.hour} - {e?.class}
								</p>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}
