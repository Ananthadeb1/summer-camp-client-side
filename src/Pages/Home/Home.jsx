
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {


  return (
    <div>
      <Helmet>
        <title>THE WITCHERY | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="sm:px-16 px-5">
        <PopularClass></PopularClass>
        <PopularInstructor></PopularInstructor>
        <ExtraSection></ExtraSection>
      </div>

    </div>
  );
};

export default Home;
