//1. when click on a specific product next go to route section
//after doing everything go to backend for data of that particular id by making a file getproductDetails in backend controller
//then in last coming from common page here is we get tha product details

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../common";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import DisplayINRCurrency from "../helpers/displayCurrency";
import VerticalCardProduct from "../components/VerticalCardProduct";
import CategoryWiseProductDisplay from "../components/CategoryWiseProductDisplay";

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const params = useParams();
  const [loading, setLoading] = useState(false);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [zoomImageCordinate, setZoomImageCordinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });
    setLoading(false);
    const dataResponse = await response.json();
    setData(dataResponse?.data);
    setActiveImage(dataResponse?.data?.productImage[0]);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const handleMouseEnterProduct = (imgURL) => {
    setActiveImage(imgURL);
  };

  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      console.log(x, "cordinate");
      console.log(y, "cordinate");

      setZoomImageCordinate({
        x,
        y,
      });
    },
    [zoomImageCordinate]
    );
    
    const handleZoomOutImage = () => {
        setZoomImage(false)
    }
  return (
    <div className="container mx-auto p-4">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4">
        {/**product Image */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-white rounded p-2 relative">
            <img
              src={activeImage}
              className="h-full w-full object-scale-down mix-blend-multiply hover:cursor-pointer"
              onMouseMove={handleZoomImage} onMouseLeave={handleZoomOutImage}
            />
            {/**image zoom */}
            {zoomImage && (
              <div className="hidden lg:block absolute min-w-[500px] min-h-[400px] bg-white p-1 -right-[510px] top-0 overflow-hidden">
                <div
                  className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply "
                  style={{
                    backgroundImage: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${zoomImageCordinate.x * 100}% ${
                      zoomImageCordinate.y * 100
                    }%`,
                  }}
                ></div>
              </div>
            )}
          </div>

          <div className="h-full">
            {loading ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {productImageListLoading.map((el) => {
                  return (
                    <div
                      className="h-20 w-20 bg-white rounded animate-pulse"
                      key={"loadingImage"}
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {data.productImage.map((imgURL, index) => {
                  return (
                    <div
                      className="h-20 w-20 bg-white rounded p-1"
                      key={imgURL}
                    >
                      <img
                        src={imgURL}
                        className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                        onClick={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/**product details */}
        {loading ? (
          <div className="flex flex-col gap-1">
            <p className="bg-white animate-pulse rounded-full inline-block px-48 py-3 w-fit"></p>
            <h2 className="text-2xl lg:text-3xl font-medium h-16 bg-white animate-pulse"></h2>
            <p className="capitialize text-slate-400 bg-white rounded-full animate-pulse w-fit px-24 py-3"></p>

            <div className="text-red-600 flex items-center gap-1 bg-white animate-pulse px-24 py-3 w-fit"></div>
            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 animate-pulse">
              <p className=" bg-white"></p>
              <p className="text-white line-through bg-slate-200"></p>
            </div>

            <div className="flex items-center gap-3 my-2">
              <button className="bg-white animate-pulse px-20 py-3 w-fit rounded-full"></button>
              <button className="bg-white-200 animate-pulse px-20 py-3 w-fit rounded-full"></button>
            </div>

            <div>
              <p className="text-slate-600 font-medium my-1 h-60 bg-white animate-pulse px-72 py-7 w-full"></p>
              <p></p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <p className="bg-black text-red-600 px-2 rounded-full inline-block w-fit">
              {" "}
              {data?.brandName}
            </p>
            <h2 className="text-2xl lg:text-3xl font-medium text-white">
              {data?.productName}
            </h2>
            <p className="capitialize text-slate-400">{data?.category}</p>

            <div className="text-red-600 flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
              <p className="text-red-600">
                {DisplayINRCurrency(data?.sellingPrice)}
              </p>
              <p className="text-slate-400 line-through">
                {DisplayINRCurrency(data?.price)}
              </p>
            </div>

            <div className="flex items-center gap-3 my-2">
              {/* <button className="border-2 border-black rounded px-3 py-1 min-w-[100px] text-black font-medium hover:bg-black hover:text-white hover:border-white bg-white">
                Buy
              </button>
              <button className="border-2 border-white rounded px-3 py-1 min-w-[100px] font-medium text-white bg-black">
                Add to Cart
              </button> */}
                {/* <button className="border-2 border-black rounded px-3 py-1 min-w-[100px] text-black font-medium hover:bg-black hover:text-white hover:border-white bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300">
  Buy
</button>
<button className="border-2 border-white rounded px-3 py-1 min-w-[100px] font-medium text-white bg-black hover:shadow-lg hover:-translate-y-1 transition duration-300">
  Add to Cart
</button> */}
                {/* <button className="border rounded px-4 py-2 min-w-[120px] text-white bg-blue-600 font-medium hover:shadow-md hover:scale-105 transition duration-200">
  Buy
</button>
<button className="border rounded px-4 py-2 min-w-[120px] text-blue-600 bg-white font-medium hover:shadow-md hover:scale-105 transition duration-200">
  Add to Cart
</button> */}
                
                <button className="border rounded px-4 py-2 min-w-[120px] text-white bg-black font-medium hover:shadow-lg hover:scale-105 transition duration-200">
  Buy
</button>
<button className="border rounded px-4 py-2 min-w-[120px] text-black bg-white font-medium hover:shadow-lg hover:scale-105 transition duration-200">
  Add to Cart
</button>



            </div>

            <div>
              <p className="text-white font-medium my-1">Description : </p>
                <p className="text-white">{data?.description}</p>
            </div>
          </div>
        )}
          </div>
          {
              data.category && (
                <CategoryWiseProductDisplay
                category={data?.category}
                heading={"Recommended Product"}
              />
              )
          }
          
    </div>
  );
};

export default ProductDetails;
