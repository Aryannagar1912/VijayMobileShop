import BannerProduct from "../components/BannerProduct";
import CategoryList from "../components/CategoryList";
import HorizontalCardProduct from "../components/HorizontalCardProduct";

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

        <HorizontalCardProduct category={"Covers"} heading={"Trending Covers"} />
        
        
      </div>
    </>
  );
};

export default Home;



{/* <div className="bg-black text-white h-7">
      
      <div className="flex justify-center items-center mt-4 text-lg">EXPLORE OUR CATEGORIES</div>
  </div> */}