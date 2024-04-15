import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const NeedTable = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/mCr0fcP/service3.png')] bg-cover bg-no-repeat bg-center py-[70px] bg-fixed ">
      <div className="flex items-center container mx-auto w-[85%]">
        <SectionTitle
          style="sm:text-left"
          topText="NEED A TABLE ON COFFEE HOUSE"
          BottomText="Booking Table For Your & Family Members"
        />
        <div>
          <Link
            to="/reservation"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium uppercase transition-all bg-primary rounded hover:bg-primary group"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedTable;
