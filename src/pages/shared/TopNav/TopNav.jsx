const TopNav = () => {
  return (
    <section className="py-[10px] bg-base-200">
      <div className="hidden roboto lg:grid  grid-cols-3 items-center w-[95%] mx-auto">
        <div className="flex  gap-1 items-center text-sm uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-primary">opening hours : </span>
          <span> 08:00 am - 09:00 pm</span>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <div className="flex  gap-1 items-center  text-sm uppercase justify-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-primary"
          >
            <path
              fillRule="evenodd"
              d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-primary">Location :</span>
          <span> 55 main street, new york</span>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
