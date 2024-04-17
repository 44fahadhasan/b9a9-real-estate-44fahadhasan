import PropTypes from "prop-types";

const ChefsCard = ({
  chefInpfo: { chefName, img, level, facebook, twitter, youTube } = {},
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="150"
      className="space-y-4 roboto p-6 bg-base-100 border-base-100 hover:border-primary border-b-2 transition-all duration-300"
    >
      <img
        src={img}
        alt={chefName}
        className="object-cover h-[246px] mx-auto mb-4 rounded-md"
      />
      <div className="flex flex-col items-center">
        <h4 className="text-lg text-secondary font-medium">{chefName}</h4>
        <p className="text-base text-primary">{level}</p>
        <div className="flex mt-2 space-x-2">
          <a
            className="hover:scale-110 transition-all duration-300"
            target="_blank"
            href={twitter}
            title="Twitter"
          >
            <svg
              className="hover:text-warning transition-all duration-300 w-6 h-6 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            className="hover:scale-110 transition-all duration-300"
            target="_blank"
            href={facebook}
            title="facebook"
          >
            <svg
              className="hover:text-warning transition-all duration-300 w-6 h-6 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            className="hover:scale-110 transition-all duration-300"
            target="_blank"
            href={youTube}
            title="youTube"
          >
            <svg
              className="hover:text-warning transition-all duration-300 w-6 h-6 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

ChefsCard.propTypes = {
  chefInpfo: PropTypes.object.isRequired,
};

export default ChefsCard;
