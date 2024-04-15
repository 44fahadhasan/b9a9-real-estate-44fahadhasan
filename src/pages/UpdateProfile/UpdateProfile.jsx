import { useRef, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const UpdateProfile = () => {
  const [editInput, setEditInput] = useState(true);

  const { updateUserProfile, user } = useAuth();
  const textInputRef = useRef(null);

  // handleProfileEdit
  const handleProfileEdit = () => {
    setEditInput(!editInput);
    textInputRef.current.focus();
  };

  // from handler
  const handleFromSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const photourl = e.target.photourl.value;

    updateUserProfile(fullName, photourl)
      .then(() => {
        // Profile updated!
        setEditInput(true);
        return toast.success("Profile updated successfull");
      })
      .catch((error) => {
        // An error occurred
        toast.error(error.message);
      });
  };

  return (
    <div className="roboto relative mt-16 mb-32 max-w-lg  sm:mt-24 container mx-auto w-[85%] py-[130px]">
      <div className="rounded overflow-hidden shadow-md bg-base-200 border-t-4 border-primary">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src={
                user.photoURL ||
                "https://i.pinimg.com/736x/6d/1e/bf/6d1ebf50b4a2c395dabbd4f8c1670c4b.jpg"
              }
              className="rounded-full object-cover h-full w-full shadow-md ring-4 ring-[#4e5256]"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <div className="relative">
            <h3 className="text-lg leading-6 font-medium text-secondary border-b border-dashed border-primary pb-2">
              My Profile
            </h3>
            <button
              onClick={handleProfileEdit}
              className="absolute top-0 right-0"
              title="Edit Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_3615_637)">
                  <path
                    d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                    stroke="url(#paint0_linear_3615_637)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                    stroke="url(#paint1_linear_3615_637)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16 5L19 8"
                    stroke="url(#paint2_linear_3615_637)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_3615_637"
                    x1="6.56139"
                    y1="5.00744"
                    x2="17.7546"
                    y2="6.50865"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3615_637"
                    x1="11.3644"
                    y1="1.16058"
                    x2="21.6966"
                    y2="2.54632"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_3615_637"
                    x1="16.5911"
                    y1="4.54018"
                    x2="19.1741"
                    y2="4.88661"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                  </linearGradient>
                  <clipPath id="clip0_3615_637">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="pt-8">
            <form onSubmit={handleFromSubmit} className="space-y-6 mb-8">
              <div className="space-y-1 text-base">
                <label className="block text-secondary">Full Name</label>
                <input
                  readOnly={editInput ? true : false}
                  ref={textInputRef}
                  type="text"
                  defaultValue={user.displayName || "Name not available"}
                  name="fullName"
                  className={`${
                    editInput && "focus:outline-none"
                  } w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400`}
                />
              </div>

              <div className="space-y-1  text-base">
                <label className="block text-secondary">Email</label>
                <input
                  disabled
                  type="email"
                  title="Read Only"
                  defaultValue={user.email || "Email not available"}
                  name="email"
                  className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400 cursor-not-allowed"
                />
              </div>

              <div className="space-y-1  text-base">
                <label className="block text-secondary">photoURL</label>
                <input
                  readOnly={editInput ? true : false}
                  type="url"
                  defaultValue={user.photoURL}
                  name="photourl"
                  className={`${
                    editInput && "focus:outline-none"
                  } w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400`}
                />
              </div>
              <button
                disabled={(editInput && true) || false}
                className={`${
                  (editInput &&
                    "cursor-not-allowed bg-[#716F75] text-[#A6A3AA]") ||
                  "transition-all duration-300 hover:scale-95 hover:bg-primary"
                } text-lg block w-full p-3 text-center rounded-sm text-secondary bg-base-100  `}
              >
                Saved
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
