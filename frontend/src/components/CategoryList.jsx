import { useEffect, useState } from "react";
import SummaryApi from "../common";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  const customOrder = [
    "Covers",
    "Mobiles",
    "Chargers",
    "Earbuds",
    "Earphones",
    "Speakers",
    "Power Bank",
    "Lenses",
    "Smartwatches",
    "USB",
    "Other Accessories",
  ];
  // Custom sorting function using customOrder
  const sortedCategoryProduct = [...categoryProduct].sort((a, b) => {
    const aIndex = customOrder.indexOf(a.category);
    const bIndex = customOrder.indexOf(b.category);

    // Return the difference between the indices to determine order
    return aIndex - bIndex;
  });
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
        {/* {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
                  key={"categoryLoading" + index}
                ></div>
              );
            })
          : sortedCategoryProduct.map((product, index) => {
              return (
                <Link
                  to={"/product-category/" + product?.category}
                  key={product?.id}
                  className="cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-white flex items-center justify-center">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.category}
                      className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base text-white">
                    {product?.category}
                  </p>
                </Link>
              );
            })} */}
        {loading
  ? categoryLoading.map((el, index) => {
      return (
        <div
          className="h-14 w-14 sm:h-16 sm:w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse flex-shrink-0"
          key={"categoryLoading" + index}
        ></div>
      );
    })
  : sortedCategoryProduct.map((product, index) => {
      return (
        <Link
          to={"/product-category?category" + product?.category}
          key={product?.id}
          className="cursor-pointer"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-white flex items-center justify-center">
            <img
              src={product?.productImage[0]}
              alt={product?.category}
              className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
            />
          </div>
          <p className="text-center text-sm md:text-base text-white">
            {product?.category}
          </p>
        </Link>
      );
    })}

      </div>
    </div>
  );
};

export default CategoryList;
