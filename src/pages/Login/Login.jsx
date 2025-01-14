import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tost from "../../components/Tost/Tost";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const { userLogin, loginWithGoogle, loginWithGithub } = useAuth();
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
    const email = data.email;
    const password = data.password;

    userLogin(email, password)
      .then(() => {
        // Signed in
        navigate(`${location?.state || "/"}`);
        toast.success("Login successful by email account");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    resetField("email");
    resetField("password");
  };

  const handleSocialLogin = (socialLogin) => {
    socialLogin()
      .then(() => {
        navigate(`${location?.state || "/"}`);
        toast.success("Login successful by social account");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // password toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      // data-aos="fade-up"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="my-[130px] container mx-auto w-[85%]"
    >
      <div className="roboto w-full mx-auto max-w-[770px] p-8 space-y-3  bg-base-200 text-secondary border-t-[3px] border-primary">
        <Tost />
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-base">
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
          <div className="space-y-1 text-base">
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
            <div className="flex justify-end text-xs text-gray-400">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="text-lg block w-full p-3 text-center rounded-sm text-secondary bg-base-100 hover:bg-primary transition-all duration-300 hover:scale-95">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-primary"></div>
          <p className="px-3 text-base text-secondary">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-primary"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleSocialLogin(loginWithGoogle)}
            aria-label="Log in with Google"
            className="p-3 rounded-sm hover:text-primary transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          <button
            onClick={() => handleSocialLogin(loginWithGithub)}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm hover:text-primary transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-secondary">
          Don&rsquo;t have an account?
          <Link to="/signup" className="underline text-secondary">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
