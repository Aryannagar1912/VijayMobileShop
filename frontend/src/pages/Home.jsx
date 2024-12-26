import CategoryList from "../components/CategoryList";

const Home = () => {
  return (
    <>
      
    <h2 class="relative text-center text-xl my-4">
  <span class="absolute left-0 w-[38%] top-1/2 transform -translate-y-1/2 border-t-2 border-black"></span>
  EXPLORE OUR CATEGORIES
  <span class="absolute right-0 w-[38%] top-1/2 transform -translate-y-1/2 border-t-2 border-black"></span>
      </h2>
      <div>
        <CategoryList />
      </div>
    </>
  );
};

export default Home;



{/* <div className="bg-black text-white h-7">
      
      <div className="flex justify-center items-center mt-4 text-lg">EXPLORE OUR CATEGORIES</div>
  </div> */}