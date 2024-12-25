import { useEffect, useState } from "react";
import SummaryApi from "../common";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";

const AllUsers = () => {
  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUser(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  const [allUser, setAllUser] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id : "",
  })

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full bg-white">
        <thead className="">
          <tr className="bg-black text-white">
            <th className="border text-base font-medium">Sr.</th>
            <th className="border text-base font-medium">Name</th>
            <th className="border text-base font-medium">Email</th>
            <th className="border text-base font-medium">Role</th>
            <th className="border text-base font-medium">Created Date</th>
            <th className="border text-base font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((el, index) => {
            return (
              <tr className="">
                <td className="border text-base text-center">{index + 1}</td>
                <td className="border text-base text-center">{el?.name}</td>
                <td className="border text-base text-center">{el?.email}</td>
                <td className="border text-base text-center">{el?.role}</td>
                <td className="border text-base text-center">
                  {moment(el?.createdAt).format("LL")}
                </td>
                <td className="border text-base text-center">
                  <button
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setUpdateUserDetails(el)
                      setOpenUpdateRole(true)
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers} />
      )}
    </div>
  );
};

export default AllUsers;
