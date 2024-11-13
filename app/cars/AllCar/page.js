"use client";

import { Navbar } from '@/components/Navbar';
import Banner from '@/components/Banner';
import CarCard from '@/components/CarCard';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { useState } from "react";
import carDetails from '../[name]/cars';

export default function AllCar() {
  const [search, setSearch] = useState("");

  const carData = Object.values(carDetails).map(car => ({
    name: car.name,
    price: car.price,
    transmission: car.transmission,
    rating: car.rating,
    seats:car.seats,
  }));

  // Filter mobil berdasarkan pencarian
  const filteredCars = carData.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Banner />
      <main className="p-4">
        <div className='my-10'>
          <SearchBar/>
        </div>
        {/* Car Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredCars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
        
        <button className="border-2 border-black text-black py-2 px-6 rounded-md hover:bg-black hover:text-white transition duration-300 mx-auto my-10 block">
          See More
        </button>
      </main>
      <Footer />
    </div>
  );
}
