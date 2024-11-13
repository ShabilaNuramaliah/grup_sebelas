import React from 'react';
import Image from 'next/image';   

const ProfilePage = () => {
    const cars = [
        { name: "Avanza", transmission: "Manual", rentalDate: "10/05/2024", image: "/avanza.png", rating: "4.7" },
        { name: "Chevrolet Silverado", transmission: "Otomatis", rentalDate: "15/06/2024", image: "/chevy.png", rating:"4.9" },
        { name: "Toyota Fortuner", transmission: "Otomatis/Manual", rentalDate: "20/07/2024", image: "/fortuner.png", rating:"5.0" },
        { name: "Daihatsu Terios", transmission: "Otomatis/Manual", rentalDate: "05/08/2024", image: "/terios.png", rating:"4.7" },
    ];

    return (
        <div className="bg-gray-100 px-4 md:px-12 min-h-screen pb-10">

            {/* Header Profil */}
            <div className="bg-cover bg-center items-center h-[340px] md:h-[440px] rounded-lg p-6 mt-6 mx-6" style={{ backgroundImage: "url('/whitee.png')" }}>
                <div className="flex flex-col items-center justify-center h-full">
                    <Image 
                        src="/profile.png" 
                        alt="Profile" 
                        width={144}     
                        height={144}    
                        className="shadow-lg rounded-full w-24 h-24 md:w-36 md:h-36" 
                    />
                    <h2 className="text-lg text-black md:text-[24px] font-bold p-2 mt-4">David Kurniawan</h2>
                    <p className="text-sm text-black md:text-[18px] p-2 font-semibold">Makassar | Bergabung Maret 2023</p>
                    <p className="text-sm text-black md:text-[18px] p-2">Email: davidkurniawan89@gmail.com</p>
                    <p className="text-sm text-black md:text-[18px] p-2">Nomor Telepon: 08979969599</p>
                </div>
            </div>

            {/* Riwayat Penyewaan */}
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 mt-6 mx-6">
                <h3 className="text-lg md:text-[22px] text-black font-semibold mb-4">Riwayat Penyewaan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {cars.map((car, index) => (
                        <div key={index} className="bg-gray-100 flex flex-col items-center p-4 rounded-lg shadow-lg">
                            {/* Gambar */}
                            <div className="flex justify-center pt-4 pb-4">
                                <Image 
                                    src={car.image} 
                                    alt={car.name} 
                                    width={200} 
                                    height={200} 
                                    className="object-cover rounded" 
                                />
                            </div>

                            {/* Teks */}
                            <div className="w-full p-4 flex flex-col items-start rounded-b-lg">
                                <h4 className="text-start text-black text-[16px] md:text-[18px] font-medium pb-2 font-bold">{car.name} ⭐: {car.rating}</h4>
                                <p className="text-start text-sm md:text-[16px] text-gray-500 pb-1">Transmisi: {car.transmission}</p>
                                <p className="text-start text-sm md:text-[16px] text-gray-600">Tanggal Sewa: {car.rentalDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Riwayat Ulasan */}
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 mt-6 mx-6">
                <h3 className="text-lg text-black md:text-[22px] font-semibold mb-4">Riwayat Ulasan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[ 
                        { title: "Aplikasi yang Praktis dan Efisien", rating: 5.0, comment: "Aplikasi ini sangat mudah digunakan dan membantu dalam banyak hal." },
                        { title: "Pelayanan Cepat", rating: 4.9, comment: "Pelayanan yang cepat dan sangat responsif, sangat puas!" },
                        { title: "Tambahkan Fitur Khusus", rating: 4.7, comment: "Bagus, namun akan lebih baik jika ada fitur tambahan." },
                    ].map((review, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                            <h4 className="text-black text-[16px] md:text-[18px]">{review.title}</h4>
                            <p className="text-[14px] md:text-[16px] text-gray-600 mt-2">
                                {review.comment}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-gray-600 mt-2">
                                Rating: {review.rating} ⭐
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pengaturan */}
            {["Pengaturan Akun", "Keamanan dan Privasi", "Pengaturan Pembayaran", "Bahasa"].map((setting, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg px-6 md:px-12 m-6">
                    <div className="border-b last:border-b-0 py-4">
                        <p className="text-black text-[16px] md:text-[22px] font-bold">{setting}</p>
                    </div>
                </div>
            ))}

            {/* Tombol Logout */}
            <div className="flex justify-center p-10">
                <button className="bg-black text-lg text-[16px] md:text-[20px] font-bold text-white px-16 py-2 rounded-lg hover:bg-gray-800">
                    Log Out
                </button>
            </div>

        </div>
    );
};

export default ProfilePage;