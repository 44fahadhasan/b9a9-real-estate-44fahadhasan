import ourChefs from "../../assets/images/team-inner-bg-overlay.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useDataLoader from "../../hooks/useDataLoader";
import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";
import NeedTable from "../shared/NeedTable/NeedTable";
import Testimonial from "../shared/Testimonial/Testimonial";
import ChefsCard from "./ChefsCard/ChefsCard";
const OurChefs = () => {
  const chefsData = useDataLoader("/public/chefsData.json");
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
        <section className="mt-[70px]">
          <div className="space-y-16">
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {chefsData.map((chef) => (
                <ChefsCard key={chef.id} chefInpfo={chef} />
              ))}
            </div>
          </div>
        </section>
      </section>

      <NeedTable />

      <Testimonial />
    </div>
  );
};

export default OurChefs;
