import { useState } from 'react';
import CarDetail from '@/app/cars/[name]/page';
import SearchBar from './SearchBar'; // Pastikan import SearchBar

const CarList = () => {
  const cars = Object.values(carDetails); // Mengambil semua data mobil

  const [filteredCars, setFilteredCars] = useState(cars);

  // Fungsi untuk menangani pencarian dan filter berdasarkan lokasi
  const handleSearch = (searchQuery, location) => {
    const filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = location ? car.location.toLowerCase() === location.toLowerCase() : true;
      return matchesSearch && matchesLocation;
    });
    setFilteredCars(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onLocationChange={handleSearchs} />
      <div>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.name} className="mb-4 p-4 border rounded-lg">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p>{car.type}</p>
              <p>Rp {car.price.toLocaleString()}</p>
              <p>{car.location}</p>
            </div>
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </div>
  );
};

export default CarList;
