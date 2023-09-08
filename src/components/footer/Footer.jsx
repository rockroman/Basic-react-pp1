const Footer = () => {
  return (
    <div id="right-side">
      <a href="#">
        <img
          loading="lazy"
          src="assets/images/surf-logo1.jpg"
          alt="light blue surf logo with red surfer and black and red text"
          id="logo2"
        />
      </a>
      <div class="social-media">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="link to company facebook page"
        >
          <i class="fa-brands fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="link to company instagram page"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          aria-label="link to company twitter page"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="link to company linkedin page "
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <p>
        This website is build for educational purposes and it's product of
        imagination and hard work!Company and content are pure fiction
      </p>
      <div class="trade-mark">
        By{" "}
        <a href="https://github.com/rockroman">
          Roman Rakic <i class="fa-brands fa-github"></i>
        </a>
        <br />
        2022
      </div>
    </div>
  );
};
export default Footer;
