import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tost from "../../components/Tost/Tost";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [toggle, setToggle] = useState(true);
  const { createNewUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  // from handler
  const onSubmit = (data) => {
    const fullName = data.fullName;
    const email = data.email;
    const photourl = data.photourl;
    const password = data.password;

    // password checker
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast.error(
        "Minimum one english character lower and upper case  must be included in the password with length 6 greater than or equal"
      );
    }

    createNewUser(email, password)
      .then(() => {
        // user profile
        updateUserProfile(fullName, photourl);
        toast.success("Created an new account successfully");
        navigate(`${location?.state || "update-profile"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    resetField("fullName");
    resetField("email");
    resetField("photourl");
    resetField("password");
  };

  // password toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="my-[130px] container mx-auto w-[85%]">
      <div className="roboto w-full mx-auto max-w-[770px] p-8 space-y-3  bg-base-200 text-secondary border-t-[3px] border-primary">
        <Tost />
        <h1 className="text-3xl font-bold text-center">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-base">
            <label className="block text-secondary">Name</label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              name="fullName"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
            />
            {errors.fullName && (
              <span className="text-primary">Full name is required</span>
            )}
          </div>
          <div className="space-y-1  text-base">
            <label className="block text-secondary">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
            />
            {errors.email && (
              <span className="text-primary">Email is required</span>
            )}
          </div>
          <div className="space-y-1  text-base">
            <label className="block text-secondary">photoURL</label>
            <input
              {...register("photourl")}
              type="url"
              name="photourl"
              placeholder="photoURL"
              className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
            />
          </div>
          <div className="space-y-1  text-base">
            <label className="block text-secondary">Password</label>
            <div className="relative flex items-center">
              <input
                {...register("password", { required: true })}
                type={toggle ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={handleToggle}
              >
                {(!toggle && (
                  <svg
                    className="w-6 h-6 text-secondary-content"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )) || (
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </span>
            </div>
            {errors.password && (
              <span className="text-primary">Password is required</span>
            )}
          </div>
          <button className="text-lg block w-full p-3 text-center rounded-sm text-secondary bg-base-100 hover:bg-primary transition-all duration-300 hover:scale-95">
            Sign up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-secondary">
          You have an account?
          <Link to="/login" className="underline text-secondary">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
