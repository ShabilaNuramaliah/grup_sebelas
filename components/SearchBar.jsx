const SearchBar = ({ onSearch, onLocationChange }) => {
    return (
      <div className="flex gap-4 mb-8 items-center">
        <h2 className="pl-20 mr-40 text-xl md:text-3xl text-black">Pilihan Mobil Terbaik Bulan Ini</h2>
        
        {/* Input untuk mencari berdasarkan nama mobil */}
        <input 
          type="text" 
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value, '')} // Menyaring berdasarkan searchQuery
          className="flex-1 text-black p-2 border border-black rounded-md"
        />
        
        {/* Dropdown untuk memilih lokasi */}
        <div>
          <select 
            onChange={(e) => onLocationChange('', e.target.value)} // Menyaring berdasarkan lokasi
            className="p-2 text-white border border-black rounded-md bg-black"
          >
            <option value="">Pilih Lokasi</option>
            <option value="makassar">Makassar</option>
            <option value="jakarta">Jakarta</option>
            <option value="surabaya">Surabaya</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  