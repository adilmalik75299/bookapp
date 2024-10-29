import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate()
  const [authUser, setAuthUser,changeLoginLogout] = useAuth();
  const handleLogout = () => {
    try {
      // setAuthUser({
      //   ...authUser,
      //   user: null,
      // });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      changeLoginLogout(null)
      navigate("/")
    //   setTimeout(() => {
    //   }, 3000);
    } catch (error) {
      toast.error("Error: ", error.message);
      setTimeout(() => {
        
      }, 2000);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
};
export default Logout;
