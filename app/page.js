"use client"
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/cars/AllCar'); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow p-8">
        <h1>INI LANDING PAGE</h1>
        <button 
          onClick={handleClick} 
          className="block mx-auto my-8 px-8 py-2 bg-black text-white rounded-md cursor-pointer text-lg hover:bg-gray-800 transition"
        >
          See All Cars
        </button>
      </main>
      <Footer/>
    </div>
  );
}
