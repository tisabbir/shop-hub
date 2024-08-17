import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const [search, setSearch] = useState(""); // Search term state
  const [category, setCategory] = useState(""); // **Changed Code** - Category filter state
  const [brand, setBrand] = useState(""); // **Changed Code** - Brand filter state
  const [minPrice, setMinPrice] = useState(0); // **Changed Code** - Minimum price filter state
  const [maxPrice, setMaxPrice] = useState(""); // **Changed Code** - Maximum price filter state
  const limit = 9; // Number of products per page

  useEffect(() => {
    fetchProducts(page, search, category, brand, minPrice, maxPrice);
  }, [page, search, category, brand, minPrice, maxPrice]);

  const fetchProducts = async (page, searchTerm,  category, brand, minPrice, maxPrice) => {
    const res = await fetch(`http://localhost:5000/products?page=${page}&limit=${limit}&search=${searchTerm}&category=${category}&brand=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}`);

    const data = await res.json();
    setProducts(data.products);
    setTotalPages(data.totalPages);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1); // Reset to the first page when a new search is initiated
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(1);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    setPage(1);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    setPage(1);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    setPage(1);
  };

  return (
    <div>

      {/* search */}
      <div className="mx-auto py-4  flex justify-center gap-2">
        <button className="btn">Search by item name</button>
        <input className="input input-bordered" placeholder="Item Name" onChange={handleSearch} />
      </div>
      {/* search */}

       {/* Filter Options */}
       <div className="flex justify-center gap-4 my-4">
        {/* **Changed Code - Start** */}
        <select value={category} onChange={handleCategoryChange} className="select select-bordered">
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Computers">Computers</option>
        </select>

        <select value={brand} onChange={handleBrandChange} className="select select-bordered">
          <option value="">All Brands</option>
          <option value="TechBrand">TechBrand</option>
          <option value="CompTech">CompTech</option>
          <option value="SoundWave">SoundWave</option>
          <option value="WearTech">WearTech</option>
          <option value="VisionMax">VisionMax</option>
          <option value="PlayTech">PlayTech</option>
          <option value="FitLife">FitLife</option>
          <option value="HomeSmart">HomeSmart</option>
          <option value="CookEase">CookEase</option>
          <option value="BrightLite">BrightLite</option>
          <option value="CleanMax">CleanMax</option>
          <option value="PureAir">PureAir</option>
          <option value="GameOn">GameOn</option>
          <option value="SecureHome">SecureHome</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="input input-bordered w-28"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="input input-bordered w-28"
        />
        {/* **Changed Code - End** */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="mx-auto">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p className="font-semibold">{product.brand}</p>
                <p>{product.description}</p>
                <div className="">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <FaStar className="text-yellow-600" />
                      <FaStar className="text-yellow-600" />
                      <FaStar className="text-yellow-600" />
                      <FaStar className="text-yellow-600" />
                      <FaStarHalf className="text-yellow-600" />
                    </div>
                    <div>
                      <p>{product.ratings}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold">TK {product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4 items-center">
        <button
          onClick={handlePrevious}
          className="btn"
          disabled={page === 1}
        >
          « previous
        </button>
        <span className="mx-4">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="btn"
          disabled={page === totalPages}
        >
          next »
        </button>
      </div>
    </div>
  );
};

export default Products;
