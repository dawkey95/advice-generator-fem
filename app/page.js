import AdviceCard from '@/components/adviceCard';
import Navbar from '@/components/navbar';

const Home = () => {
	return (
		<main className='flex flex-col items-center min-h-screen px-4 font-sans lg:px-[28.125rem] bg-lightBackground dark:bg-darkBackground'>
			<Navbar />
			<AdviceCard />
		</main>
	);
};

export default Home;
