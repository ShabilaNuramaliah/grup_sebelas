"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/cars-page'); // Arahkan ke halaman CarsPage
  };

  return (
    <div className="p-8">
      <button 
        onClick={handleClick} 
        className="block mx-auto my-8 px-8 py-2 bg-black text-white rounded-md cursor-pointer text-lg hover:bg-gray-800 transition"
      >
        See All Cars
      </button>
    </div>
  );
}
