const Banner = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/cars/banner.png')" }}>
      {/* Optional: light overlay, lebih cerah */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>

      {/* Text */}
      <div className="absolute bottom-0 flex flex-col justify-center items-start pl-20 pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Rent a Car for <br /> Every Journey
        </h1>
      </div>
    </div>
  );
};

export default Banner;
