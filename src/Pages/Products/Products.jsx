import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const limit = 9; // Number of products per page

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (page) => {
    const res = await fetch(`http://localhost:5000/products?page=${page}&limit=${limit}`);
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

  return (
    <div>
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
      <div className="flex justify-center my-4">
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
