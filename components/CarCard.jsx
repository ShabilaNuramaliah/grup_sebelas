"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CarCard = ({ car }) => {
  const router = useRouter();

  const handleDetailClick = () => {
    router.push(`/cars/${car.name.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center shadow-lg transition-transform duration-200 transform hover:scale-105">
      <Image
        src={`/cars/${car.name.toLowerCase().replace(" ", "-")}.jpg`}
        alt={car.name}
        width={400}
        height={192}
        className="w-full h-48 object-cover border-b border-gray-300 mb-4"
      />

      <div className="text-black">
        <div className="flex items-start justify-start text-lg">
          <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
        </div>
        <div className="flex justify-start space-x-4 mb-5">
          <div className="flex items-center text-sm">
            <Image
              src="/icon/Automation.svg"
              alt="Automation"
              width={16}
              height={16}
              className="mr-2"
            />
            <p>{car.transmission}</p>
          </div>
          <div className="flex items-center text-sm">
            <Image
              src="/icon/Living Room.svg"
              alt="Living Room"
              width={16}
              height={16}
              className="mr-2"
            />
            <p>{car.seats}</p>
          </div>
          <div className="flex items-center text-sm">
            <Image
              src="/icon/Star.svg"
              alt="Star"
              width={16}
              height={16}
              className="mr-2"
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
