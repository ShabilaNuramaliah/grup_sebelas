"use client";

import React, { useState } from "react";

export default function OrderPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="px-20 py-10 flex space-x-40">
        {/* Left Section: User Information, Booking, and Payment Method */}
        <div>
          <p className="text-lg font-semibold">1. Informasi Pengguna</p>
          {/* Input Fields */}
          <div className="mb-4">
            <label className="text-base text-sm text-gray-500 block mt-5 mb-3">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              required
              className="border-2 text-sm border-gray-300 py-3 px-4 rounded-lg w-[526px] mt-1 block"
            />
          </div>

          <div className="mb-4">
            <label className="text-base text-sm text-gray-500 block mt-5 mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              required
              className="border-2 text-sm border-gray-300 py-3 px-4  rounded-lg w-[526px] mt-1 block"
            />
          </div>

          <div className="mb-4">
            <label className="text-base text-sm text-gray-500 block mt-5 mb-3">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              required
              className="border-2 text-sm border-gray-300 py-3 px-4 rounded-lg w-[526px] mt-1 block"
            />
          </div>

          <p className="text-lg font-semibold mt-6">2. Informasi Pemesanan</p>

          {/* Booking Information */}
          <div className="flex space-x-6 mt-5">
            <div>
              <label className="text-base text-sm text-gray-500 block mb-5">
                Tanggal Pengambilan
              </label>
              <input
                type="date"
                name="pickupDate"
                required
                className="border-2 text-sm border-gray-300 py-3 px-4  rounded-lg w-[250px] mt-1 block"
              />
            </div>

            <div>
              <label className="text-base text-sm text-gray-500 block mb-5">
                Tanggal Pengembalian
              </label>
              <input
                type="date"
                name="returnDate"
                required
                className="border-2 text-sm border-gray-300 py-3 px-4 rounded-lg w-[250px] mt-1 block"
              />
            </div>
          </div>

          <p className="text-lg font-semibold mt-6">3. Payment Method</p>
          <div className="flex space-x-6 mt-5">
            <button
              onClick={() => handlePaymentSelection("cash")}
              className={`border-2 rounded-lg p-4 w-[250px] flex items-center justify-center hover:bg-gray-100 ${
                selectedPaymentMethod === "cash" ? "bg-gray-200" : "bg-white"
              }`}
            >
              <span className="text-3xl">💵</span>
            </button>
            <button
              onClick={() => handlePaymentSelection("card")}
              className={`border-2 rounded-lg p-4 w-[250px] flex items-center justify-center hover:bg-gray-100 ${
                selectedPaymentMethod === "card" ? "bg-gray-200" : "bg-white"
              }`}
            >
              <span className="text-3xl">💳</span>
            </button>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-[#F5F5F5] p-10 rounded-lg shadow-md w-[780px] space-y-4">
          <h2 className="text-lg font-semibold mb-4">Order</h2>
          <div className="flex justify-center items-center mb-10">
            <img
              src="https://medias.auto2000.co.id/sys-master-hybrismedia/h41/h5e/8826519486494/gr_0011_4-attitude-black_optimized.png"
              alt="Toyota Fortuner"
              className="w-[480]"
            />
          </div>
          <div>
            <h3 className="text-lg mb-4 font-bold">Toyota Fortuner</h3>
            <p className="text-sm text-gray-500">DD 1414 OK</p>
          </div>
          <hr className="pb-2" />
          <div className="flex text-sm justify-between text-gray-600">
            <span>Subtotal</span>
            <span>1.500.000</span>
          </div>
          <div className="flex text-sm justify-between text-gray-600">
            <span>Diskon</span>
            <span>-50.000</span>
          </div>
          <div className="flex text-sm justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>1.450.000</span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => alert("Sudah selesai memesan")}
              className="w-[200px] bg-black text-white rounded-md p-2 text-md font-semibold"
            >
              Rental Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}