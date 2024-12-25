import { useEffect, useState } from "react";
import SummaryApi from "../common";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

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
        {sortedCategoryProduct.map((product, index) => {
          return (
            <div key={product?.id} className="">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-3 bg-white flex items-center justify-center">
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className="h-full object-fill"
                />
              </div>
              <p className="text-center text-sm md:text-base">
                {product?.category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
