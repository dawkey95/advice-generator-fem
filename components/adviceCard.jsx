'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const AdviceCard = () => {
	const [advice, setAdvice] = useState('');
	const [id, setId] = useState('');
	const lg = useMediaQuery('(min-width: 1024px)');

	const fetchAdvice = async () => {
		const response = await axios.get('https://api.adviceslip.com/advice');
		const { advice, id } = response.data.slip;
		setAdvice(advice);
		setId(id);
	};

	useEffect(() => {
		window.onload = fetchAdvice();
	});

	return (
		<div className='flex flex-col w-full my-[7.5rem] lg:my-[14rem] card bg-lightCard dark:bg-darkCard shadow-primaryShadow dark:shadow-none'>
			<div className='items-center justify-center pt-10 text-center card-body'>
				<h1 className='justify-center card-title text-[0.6875rem] tracking-widest text-lightAccent dark:text-accent mb-6'>
					{`ADVICE #${id}`}
				</h1>
				<p className='mb-6 text-[1.5rem] font-extrabold text-darkText dark:text-lightText'>
					{`"${advice}"`}
				</p>
				{lg ? (
					<Image
						priority
						className='mb-8'
						src={'/images/pattern-divider-desktop.svg'}
						width={444}
						height={16}
						alt=''
					/>
				) : (
					<Image
						priority
						className='mb-8'
						src={'/images/pattern-divider-mobile.svg'}
						width={295}
						height={16}
						alt=''
					/>
				)}
				<div className='absolute bottom-[-2rem] card-actions'>
					<button
						aria-label='Get Next Advice'
						type='button'
						onClick={fetchAdvice}
						className='w-[64px] h-[64px] border-none rounded-full btn bg-accent hover:shadow-btnHover hover:bg-accent'
					>
						<svg width='24' height='24'>
							<path
								d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
								fill='#202733'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdviceCard;
