import logo from "../assest/aryanLogo.png";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { useState } from "react";
import ROLE from "../common/role";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }

    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <>
      <header className="h-16 shadow-md bg-white">
        <div className="h-full container mx-auto flex items-center px-2 justify-between">
          <div className="">
            <Link to={"/"}>
              <img
                className=""
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

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 bg-slate-200">
            <input
              type="text"
              placeholder="search product here..."
              className="w-full outline-none bg-slate-200"
            />
            <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
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
                  </nav>
                </div>
              )}
            </div>
            <div className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">0</p>
              </div>
            </div>

            <div>
              {user?._id ? (
                <button
                  className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
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
