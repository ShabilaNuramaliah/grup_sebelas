"use client"
import { useRouter } from 'next/navigation';
import Dashboard from '@/components/Dash';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/cars/AllCar'); 
  };

  return (
    <Dashboard/>
  );
}
