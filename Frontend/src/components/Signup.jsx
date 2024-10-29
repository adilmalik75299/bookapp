import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
const Signup = () => {
  // const location = useLocation();
  const [,,changeLoginLogout] = useAuth();
  const navigate = useNavigate()
  // const from =location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) =>{
    
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res);
      if(res.data){
        toast.success("signup successfully");
        changeLoginLogout(res.data.user)
        navigate("/");
      }
    })
    .catch((error)=>{
      if(error.response){

        console.log(error);
        toast.error("Error"+error.response.data.message)
      }
    })
  };
  const loginnavigate =()=>{
    navigate("/", { state: { showModal: true } }); // Pass state to indicate modal should be shown
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box bg-white dark:bg-slate-900 dark:text-white">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p className="text-xl">
                  Have Account?{" "}
                  <button
                    onClick={loginnavigate}
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
