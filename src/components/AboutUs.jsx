const AboutUs = () => {
  return (
    <>
      <section id="about-us">
        <h2 class="section-title">ABOUT US</h2>
        <div class="about-hero">
          <img
            loading="lazy"
            src="assets/images/about-us-img-small-dimitrisvetsikas-pixaby.webp"
            id="about-hero"
            alt="various surfboards leaning on a blue fence on a sunny day"
          />
        </div>
        <section id="our-story">
          <div class="text-story">
            <h3>OUR STORY</h3>
            <p>
              10 years ago a group of enthusiastic people fall in love in the
              art of surfing, and SURF<em>ON</em> has been born.over this period
              we developed range of services targeting all types of surfers,so
              perhaps there is no better place to surf than with us,ecause we
              never end the season.so join us.
            </p>
          </div>
        </section>
        <section id="our-team">
          <h3>OUR TEAM</h3>
          <div class="instructor">
            <div class="instructor-card">
              <img
                loading="lazy"
                class="instructor-img"
                src="assets/images/our-team-img1-small-bobbie-jackson-unsplash.webp"
                alt="man holding a surfing board on a beach"
              />
              <h4>Ethan Stewart</h4>
              <p>
                Ethan is founder of a company and a master level surfing
                instructor with more than 7 yrs. of experience
              </p>
            </div>
            <div class="instructor-card">
              <img
                loading="lazy"
                class="instructor-img"
                src="assets/images/our-team-img2-mobile-gustavo-torres-unsplash.webp"
                alt="women in a wetsuit sitting on the floor by th surfing board"
              />
              <h4>Natalya Walsh</h4>
              <p>
                Natalya is our Co-founder,certified lifeguard and surfing
                instructor with years of experience{" "}
              </p>
            </div>
          </div>
          <div class="instructor">
            <div class="instructor-card">
              <img
                loading="lazy"
                class="instructor-img"
                src="assets/images/our-team-img3-mobile-janilson-furtado-unsplash.webp
                        "
                alt=" young man with a cool haircut holding a surfing board on a beach"
              />
              <h4>Henry Mcavoy</h4>
              <p>
                Henry is surfing from age of 8 and now is mid level surf and
                stand Up Paddleboard instructor
              </p>
            </div>
            <div class="instructor-card">
              <img
                loading="lazy"
                class="instructor-img"
                src="assets/images/uor-team-img4-mobile-ting-tse-wang-unsplash.webp"
                alt="Lady surfer riding a vawe looking very concentrated"
              />
              <h4>Jeniffer Wang</h4>
              <p>
                Jeniffer is senior level surf instructor with long history of
                surfing ,now working as a personal instructor
              </p>
            </div>
          </div>
          <h3>CONTACT US</h3>
          <hr />
        </section>
      </section>
    </>
  );
};
export default AboutUs;
