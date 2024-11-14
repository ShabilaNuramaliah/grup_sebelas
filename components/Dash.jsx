"use client"

import Image from "next/image";
import { Clock, Award, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();

  const handleClick = () => {
    router.push("/cars/AllCar");
  };
  const testimonials = [
    {
      name: "Maria Indah",
      rating: 5.0,
      review:
        "Aplikasi ini sangat membantu saya untuk menyewa mobil tanpa repot. Antarmukanya simpel dan mudah dimengerti. Saya bisa langsung menyewa mobil tanpa harus pergi ke tempat rental.",
    },
    {
      name: "Joko Santoso",
      rating: 4.9,
      review:
        "Pelayanan dari aplikasi ini sangat cepat dan responsif. Saya mendapatkan mobil yang saya pesan tepat waktu, dan petugasnya ramah. Pengalaman sewa mobil yang sangat menyenangkan!",
    },
    {
      name: "Joko Santoso",
      rating: 4.9,
      review:
        "Pelayanan dari aplikasi ini sangat cepat dan responsif. Saya mendapatkan mobil yang saya pesan tepat waktu, dan petugasnya ramah. Pengalaman sewa mobil yang sangat menyenangkan!",
    },
    {
      name: "Joko Santoso",
      rating: 4.9,
      review:
        "Pelayanan dari aplikasi ini sangat cepat dan responsif. Saya mendapatkan mobil yang saya pesan tepat waktu, dan petugasnya ramah. Pengalaman sewa mobil yang sangat menyenangkan!",
    },
    {
      name: "Joko Santoso",
      rating: 4.9,
      review:
        "Pelayanan dari aplikasi ini sangat cepat dan responsif. Saya mendapatkan mobil yang saya pesan tepat waktu, dan petugasnya ramah. Pengalaman sewa mobil yang sangat menyenangkan!",
    },
    {
      name: "Joko Santoso",
      rating: 4.9,
      review:
        "Pelayanan dari aplikasi ini sangat cepat dan responsif. Saya mendapatkan mobil yang saya pesan tepat waktu, dan petugasnya ramah. Pengalaman sewa mobil yang sangat menyenangkan!",
    },
  ];

  return (
    <main className="min-h-screen mt-3">
      {/* Pertama */}
      <section className="relative px-4 py-16 md:py-24 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Temukan Mobil Mulai Petualangan!
            </h1>
            <p className="text-lg mb-6">
              Sewa Mobil Mudah, Cepat, dan Terpercaya! Temukan berbagai pilihan
              mobil berkualitas yang siap menemani perjalanan Anda.
            </p>
            <button
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 hover-scale"
              onClick={handleClick}
            >
              Sewa Sekarang
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src="/car-hero.png"
                alt="Luxury Car"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kedua Kenapa */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Kenapa Pilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <Award className="w-12 h-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold text-center">
                Mobil Berkualitas
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <Clock className="w-12 h-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold text-center">
                Penyewaan Cepat
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <ShieldCheck className="w-12 h-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold text-center">
                Transaksi Aman
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ketiga About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/car-about.png"
                  alt="About Car"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
              <p className="text-lg mb-4">
                Selamat datang di Wheels4U, layanan penyewaan mobil terpercaya
                yang siap menemani setiap perjalanan Anda!
              </p>
              <p className="text-lg">
                Layanan penyewaan mobil yang berkomitmen untuk memberikan
                pengalaman berkendara yang mudah, cepat, dan aman. Dengan
                berbagai pilihan mobil berkualitas, kami hadir untuk memenuhi
                kebutuhan perjalanan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keempat Testi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Apa Kata Mereka?
          </h2>
         
        </div>
        <div className="flex gap-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[300px] bg-white p-6 rounded-lg shadow-sm hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <span>★</span>
                    <span className="ml-1 text-gray-700">
                      {testimonial.rating}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kelima Kontak */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="text-center mb-8">
            <p className="text-lg">
              Ada pertanyaan atau butuh bantuan? Kami siap membantu!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <Phone className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-xl font-semibold text-center"></p>
              <p>089799699599</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <Mail className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-xl font-semibold text-center"></p>
              <p>wheels4u@gmail.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover-scale">
              <MapPin className="w-8 h-8 mb-4 mx-auto" />
              <p className="text-xl font-semibold text-center"></p>
              <p>Gowa, Sulawesi</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
