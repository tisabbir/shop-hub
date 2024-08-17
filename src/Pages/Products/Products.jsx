import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="mx-auto">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="">
              <img
                src={product.image}
                alt="Shoes"
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
  );
};

export default Products;
