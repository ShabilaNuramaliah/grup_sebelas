"use client";

import { useParams, useRouter } from "next/navigation"; // Tambahkan useRouter
import carDetails from "@/app/cars/[name]/cars";
 // Asumsikan ini adalah file yang berisi data mobil

const Detail = () => {
  const { name } = useParams(); // Mendapatkan nama mobil dari URL
  const router = useRouter(); // Inisialisasi useRouter

  // Ambil detail mobil berdasarkan nama yang didapat dari URL
  const car = carDetails[name];

  if (!car) {
    return <p>Mobil tidak ditemukan.</p>;
  }

  // Fungsi untuk mengarahkan ke halaman rental
  const handleRentalClick = () => {
    router.push(`/cars/Order`); // Ganti dengan path yang sesuai untuk rental
  };

  return (
    <div className="w-full font-sans">
      {/* Main Content */}
      <div className="flex flex-col mt-1 lg:flex-row w-full">
        {/* Left Column */}
        <div className="w-full lg:w-3/5 bg-white p-12 rounded-lg shadow-md min-h-screen flex flex-col">
          <div className="flex justify-between mb-6">
            <div>
              <h1 className="text-4xl font-semibold text-black mb-2">{car.name}</h1>
              <h2 className="text-lg text-gray-500">{car.type}</h2>
            </div>
            <div>
              <span className="text-sm text-gray-500">Harga Sewa</span>
              <p className="text-xl font-bold text-black">
                Rp {car.price.toLocaleString()}
              </p>
            </div>
          </div>

          <img
            src={car.image}
            alt={car.name}
            className="w-full object-cover rounded-lg my-6"
          />

          <p className="text-black text-xl my-10">{car.description}</p>

          {/* Tombol di kiri bawah */}
          <div className="mt-auto mb-10 flex justify-start">
            <button
              onClick={handleRentalClick} // Mengarahkan ke halaman rental
              className="py-3 px-6 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition"
            >
              Rental Sekarang
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/5 bg-gray-50 text-black p-6 rounded-lg shadow-md min-h-screen">
          {/* Menambahkan min-h-screen untuk kolom kanan */}
          <h3 className="text-xl font-bold mb-8">DETAILS</h3>
          <div className="flex justify-between mb-4">
            <div className="space-y-10 w-full">
              <p className="text-[#929292]">Plat Nomor</p>
              <strong>{car.plate}</strong>
              <p className="text-[#929292]">Jumlah Kursi</p>
              <strong>{car.seats}</strong>
              <p className="text-[#929292]">Warna</p>
              <strong>{car.color}</strong>
              <p className="text-[#929292]">Lokasi</p>
              <strong>{car.location}</strong>
              <p className="text-[#929292]">Rating</p>
              <strong>{car.rating} ⭐</strong>
            </div>
            <div className="space-y-10 w-full">
              <p className="text-gray-600">Transmisi</p>
              <strong>{car.transmission}</strong>
              <p className="text-gray-600">Tahun Pembelian</p>
              <strong>{car.purchaseYear}</strong>
              <p className="text-gray-600">Kecepatan Maksimum</p>
              <strong>{car.maxSpeed}</strong>
              <p className="text-gray-600">Bahan Bakar</p>
              <strong>{car.fuel}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
