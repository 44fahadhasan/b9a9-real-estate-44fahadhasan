import { GrMapLocation } from "react-icons/gr";
import { LiaEnvelopeOpenTextSolid, LiaHeadsetSolid } from "react-icons/lia";
import contactBannerImg from "../../assets/images/menu-reservation-inner-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";
import CoffeeBrand from "../shared/CoffeeBrand/CoffeeBrand";

const Contacts = () => {
  return (
    <>
      <BannerImgTitle img={contactBannerImg} title="Contact Us" />

      <div className="roboto container mx-auto w-[85%] bg-base-100 py-[130px]">
        <section>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
              className="bg-base-200 p-[45px] flex flex-col items-center justify-center text-center"
            >
              <GrMapLocation className="text-7xl text-primary" />

              <h2 className="oswald  my-4 text-2xl text-secondary">
                Main Location
              </h2>
              <p className="mt-2 text-secondary-content">
                55 Main Street, 2nd Block,
              </p>
              <p className="mt-2 text-secondary-content">3rd Floor, New York</p>

              <div className="border-t border-dashed border-primary w-[50%] my-6"></div>

              <p className="mt-2 text-secondary-content">
                394 Main Street, 2nd Block,
              </p>
              <p className="mt-2 text-secondary-content">3rd Floor, USA</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="bg-base-200 p-[45px] flex flex-col items-center justify-center text-center"
            >
              <LiaEnvelopeOpenTextSolid className="text-7xl text-primary" />

              <h2 className="oswald  my-4 text-2xl text-secondary">
                Email Address
              </h2>
              <p className="mt-2 text-secondary-content">
                supportkaffen@gmail.com
              </p>
              <p className="mt-2 text-secondary-content">www.kaffeninfo.web</p>

              <div className="border-t border-dashed border-primary w-[50%] my-6"></div>

              <p className="mt-2 text-secondary-content">
                supportkaffen@gmail.com
              </p>
              <p className="mt-2 text-secondary-content">www.kaffeninfo.web</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="bg-base-200 p-[45px] flex flex-col items-center justify-center text-center"
            >
              <LiaHeadsetSolid className="text-7xl text-primary" />

              <h2 className="oswald  my-4 text-2xl text-secondary">
                Hot Number
              </h2>
              <p className="mt-2 text-secondary-content">+012 (345) 678 99</p>
              <p className="mt-2 text-secondary-content">123456780</p>

              <div className="border-t border-dashed border-primary w-[50%] my-6"></div>

              <p className="mt-2 text-secondary-content">+012 (345) 678 99</p>
              <p className="mt-2 text-secondary-content">123456780</p>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="mt-[130px] bg-base-200 p-[45px] pt-[80px]"
        >
          <SectionTitle
            style="sm:text-center"
            topText="CONTACT US"
            BottomText="Send Us Message"
          />

          <div className="p-[30px] rounded-xl lg:col-span-2">
            <form>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                  />
                  <svg
                    fill="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    rows="9"
                    placeholder="Write Message"
                    className="w-full px-4 py-3 rounded-md border-secondary-content bg-base-100 text-secondary focus:border-default-400"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <h6 className="text-base ">Select Subject</h6>
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
                      <p className="text-sm ml-3 ">Technical Support</p>
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
                      <p className="text-sm ml-3 ">Website Feedback</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="#"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium uppercase transition-all bg-primary rounded hover:bg-base-100 group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-sm text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary">
                    Send Message
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>

      <CoffeeBrand />
    </>
  );
};

export default Contacts;
