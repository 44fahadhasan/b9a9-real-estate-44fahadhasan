import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Tost from "../../components/Tost/Tost";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();

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
      })
      .catch((error) => {
        toast.error(error.message);
      });

    resetField("fullName");
    resetField("email");
    resetField("photourl");
    resetField("password");
  };

  return (
    <div className="roboto w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-base-200 text-secondary">
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
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
          />
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
  );
};

export default SignUp;
