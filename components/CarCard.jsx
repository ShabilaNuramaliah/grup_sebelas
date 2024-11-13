"use client";
import { useRouter } from "next/navigation";

const CarCard = ({ car }) => {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push(`/cars/${car.name.toLowerCase().replace(" ", "-")}`);
  };
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center shadow-lg transition-transform duration-200 transform hover:scale-105">
      <img
        src={`/cars/${car.name.toLowerCase().replace(" ", "-")}.jpg`}
        alt={car.name}
        className="w-full h-48 object-cover border-b border-gray-300 mb-4"
      />

      <div className="text-black">
        <div className="flex items-start justify-start text-lg">
          <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
        </div>
        <div className="flex justify-start space-x-4 mb-5">
          <div className="flex items-center text-sm">
            <img
              src="/icon/Automation.svg"
              alt="Automation"
              className="w-4 h-4 mr-2"
            />
            <p>{car.transmission}</p>
          </div>
          <div className="flex items-center text-sm">
            <img
              src="/icon/Living Room.svg"
              alt="Living Room"
              className="w-4 h-4 mr-2"
            />
            <p>{car.seats}</p>
          </div>
          <div className="flex items-center text-sm">
            <img
              src="/icon/Star.svg"
              alt="Star"
              className="w-4 h-4 mr-2"
            />
            <p>{car.rating}</p>
          </div>
        </div>
      </div>

      <div className="text-black flex justify-between items-center">
        <p className="mb-1">Rp {car.price.toLocaleString()}/hari</p>
        <button
          onClick={handleDetailClick}
          className="bg-black text-white py-2 px-4 rounded-md cursor-pointer text-sm hover:bg-gray-800 transition"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CarCard;
