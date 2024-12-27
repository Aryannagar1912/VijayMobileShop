import BannerProduct from "../components/BannerProduct";
import CategoryList from "../components/CategoryList";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <>
      <h2 className="relative text-center text-xl my-4">
        <span className="absolute left-0 w-[38%] top-1/2 transform -translate-y-1/2 border-t-2 border-black"></span>
        EXPLORE OUR CATEGORIES
        <span className="absolute right-0 w-[38%] top-1/2 transform -translate-y-1/2 border-t-2 border-black"></span>
      </h2>
      <div>
        <CategoryList />
        <BannerProduct />

        <HorizontalCardProduct
          category={"Earbuds"}
          heading={"Wireless Earbuds You’ll Love"}
        />
        <HorizontalCardProduct
          category={"Smartwatches"}
          heading={"Next-Gen Watches"}
        />

        <VerticalCardProduct
          category={"Covers"}
          heading={"Mobile Covers Collection"}
        />
        <VerticalCardProduct category={"Mobiles"} heading={"Explore Mobiles"} />
        <VerticalCardProduct
          category={"Earbuds"}
          heading={"Wireless Earbuds"}
        />
        <VerticalCardProduct
          category={"Smartwatches"}
          heading={"Smartwatches"}
        />

        <VerticalCardProduct
          category={"Speakers"}
          heading={"Portable Speakers"}
        />
        <VerticalCardProduct
          category={"Earphones"}
          heading={"EchoWired Earphones"}
        />
        <VerticalCardProduct
          category={"Power Bank"}
          heading={"Power Banks for Every Need"}
        />
        <VerticalCardProduct
          category={"Lenses"}
          heading={"Camera Lens Protector"}
        />
        <VerticalCardProduct
          category={"USB"}
          heading={"Never Run Out of Space"}
        />
        <VerticalCardProduct
          category={"Chargers"}
          heading={"Fast Charging, Anytime, Anywhere"}
        />
        <VerticalCardProduct
          category={"Other Accessories"}
          heading={"Other Accessories"}
        />
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="bg-black text-white h-7">
      
      <div className="flex justify-center items-center mt-4 text-lg">EXPLORE OUR CATEGORIES</div>
  </div> */
}
