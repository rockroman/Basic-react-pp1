const SlidesNav = () => {
  const slideButtons = [
    { href: "#slide-1", text: 1 },
    { href: "#slide-2", text: 2 },
    { href: "#slide-3", text: 3 },
  ];

  return (
    <div className="carousel__nav">
      {slideButtons.map((button, index) => {
        return (
          <a key={index} className="slider-nav" href={button.href}>
            {button.text}
          </a>
        );
      })}
    </div>
  );
};
export default SlidesNav;
