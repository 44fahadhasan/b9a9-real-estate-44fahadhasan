import ourChefs from "../../assets/images/team-inner-bg-overlay.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";
const OurChefs = () => {
  return (
    <div className="bg-base-200">
      <BannerImgTitle img={ourChefs} title="Our Chefs" />

      <section className="py-[130px] container mx-auto w-[85%]">
        {/* section title */}
        <div>
          <SectionTitle
            style="sm:text-center"
            topText="EXPERIENCE TEAM MEMBER"
            BottomText="Meet Our Professional Chefs"
          />
        </div>

        {/* all cheefs */}
        <div className="bg-base-100 mt-[70px]"></div>
      </section>
    </div>
  );
};

export default OurChefs;
