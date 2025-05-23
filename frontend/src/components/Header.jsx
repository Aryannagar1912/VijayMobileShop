import logo from "../assest/aryanLogo.png";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { useContext, useState } from "react";
import ROLE from "../common/role";
import Context from "../context";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };
  return (
    <>
      <header className="h-16 shadow-md bg-black fixed w-full z-40">
        <div className="h-full container mx-auto flex items-center px-2 justify-between">
          <div className="">
            <Link to={"/"}>
              <img
                className="invert brightness-200"
                src={logo}
                alt="Logo"
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "60px",
                  minHeight: "50px",
                }}
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm rounded-full focus-within:shadow pl-2 bg-gray-900 mr-40">
            <input
              type="text"
              placeholder="search product here..."
              className="w-full outline-none bg-gray-900 text-white placeholder-white ml-6"
              onChange={handleSearch}
              value={search}
            />
            <div className="text-lg min-w-[50px] h-8 bg-white flex items-center justify-center rounded-r-full text-black">
              <GrSearch />
            </div>
          </div>

          <div className="flex items-center gap-7">
            <div className="relative flex justify-center">
              {user?._id && (
                <div
                  className="text-3xl cursor-pointer relative flex justify-center"
                  onClick={() => setMenuDisplay(!menuDisplay)}
                >
                  {user?.profilePic ? (
                    <img
                      src={user?.profilePic}
                      className="w-10 h-10 rounded-full"
                      alt={user?.name}
                    />
                  ) : (
                    <FaRegCircleUser />
                  )}
                </div>
              )}

              {menuDisplay && (
                <div className="absolute hidden md:block bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link
                        to={"/admin-panel/all-products"}
                        onClick={() => setMenuDisplay(!menuDisplay)}
                        className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <Link to={"/order"} className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2" onClick={() => setMenuDisplay(!menuDisplay)} >Order</Link>
                  </nav>
                </div>
              )}
            </div>

            {user?._id && (
              <Link to={"/cart"} className="text-2xl relative">
                <span className="invert">
                  <FaShoppingCart />
                </span>
                <div className="bg-gray-900 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">{context?.cartProductCount}</p>
                </div>
              </Link>
            )}

            <div>
              {user?._id ? (
                <button
                  className="px-3 py-1 rounded-full text-white bg-gray-900 hover:bg-gray-950 focus:outline-none focus:ring focus:ring-gray-700 font-semibold transition duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="px-3 py-1 rounded-full text-white bg-gray-900 hover:bg-gray-950 focus:outline-none focus:ring focus:ring-gray-700 font-semibold transition duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
