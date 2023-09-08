import CampLiveWeather from "./CampLiveWeather";
import CampSLides from "./CampSLides";
import SlidesNav from "./SlidesNav";

const Camps = () => {
  return (
    <div>
      <h3 id="camp" className="section-title custom-color">
        CAMPS
      </h3>
      <hr />
      <CampLiveWeather />
      <section className="carousel" aria-label="carousel" tabIndex="0">
        <CampSLides />
        <SlidesNav />
        <hr />
      </section>
    </div>
  );
};
export default Camps;
