import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";

import reservationBannerImg from "../../assets/images/menu_reservation_inner_bg2.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CoffeeBrand from "../shared/CoffeeBrand/CoffeeBrand";

const Reservation = () => {
  return (
    <div>
      <BannerImgTitle img={reservationBannerImg} title="Reservation" />

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="my-[130px] container mx-auto w-[85%]"
      >
        <div className="p-[30px] sm:p-[45px] sm:pt-[80px] mx-auto w-full max-w-[770px] bg-base-200 border-t-[3px] border-primary">
          <SectionTitle
            style="sm:text-center"
            topText="BOOKING TABLE"
            BottomText="Make Your Reservation"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="roboto pt-[30px] "
          >
            <form>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="flName"
                      className="mb-3 block text-base font-medium text-secondary"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="flName"
                      id="flName"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="EmailAdd"
                      className="mb-3 block text-base font-medium text-secondary"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="EmailAdd"
                      id="EmailAdd"
                      placeholder="Email Addresss"
                      className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="PhoneNum"
                      className="mb-3 block text-base font-medium text-secondary"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="PhoneNum"
                      id="PhoneNum"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="mb-3 block text-base font-medium text-secondary"
                    >
                      How many guest are you bringing?
                    </label>
                    <input
                      type="number"
                      name="guest"
                      id="guest"
                      placeholder="0"
                      min="1"
                      max="30"
                      className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-secondary"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-secondary"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5 col-span-full">
                <h6 className="text-base font-medium text-secondary">
                  Are you coming to the event?
                </h6>
                <div className="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
                  <div className="flex items-center mt-3">
                    <input
                      id="radio2"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio2"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2  rounded-full overflow-hidden"
                    >
                      <span className="border-[0px]  rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm ml-3 ">Yes</p>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      id="radio3"
                      type="radio"
                      name="value1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="radio3"
                      className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2  rounded-full overflow-hidden"
                    >
                      <span className="border-[0px]  rounded-full w-full h-full"></span>
                    </label>
                    <p className="text-sm ml-3 ">No</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium uppercase transition-all bg-primary rounded hover:bg-base-100 group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-sm text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary">
                    booking table
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <CoffeeBrand />
    </div>
  );
};

export default Reservation;
