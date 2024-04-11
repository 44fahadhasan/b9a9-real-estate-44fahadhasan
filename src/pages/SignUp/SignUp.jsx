import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

    createNewUser(email, password)
      .then((user) => {
        // Signed up
        console.log("user from sign up ", user);
        updateUserProfile(fullName, photourl);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    resetField("fullName");
    resetField("email");
    resetField("photourl");
    resetField("password");
  };

  return (
    <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400">Name</label>
          <input
            {...register("fullName", { required: true })}
            type="text"
            name="fullName"
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-default-400"
          />
          {errors.fullName && <span>Full name is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-default-400"
          />
          {errors.email && <span>Email is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400">photoURL</label>
          <input
            {...register("photourl")}
            type="url"
            name="photourl"
            placeholder="photoURL"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-default-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-default-400"
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-100 bg-default-400">
          Sign up
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-400">
        You have an account?
        <Link to="/login" className="underline text-gray-100">
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
