import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import { BsChevronDoubleUp } from "react-icons/bs";
import { BsHandIndexFill } from "react-icons/bs";

import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  background-color: #457b9d;
  right: 2%;
  bottom: 30px;
  height: 2rem;
  font-size: 1.5rem;
  z-index: 2222;
  cursor: pointer;
  color: #2d3235;
`;

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    const scrolling = document.documentElement.scrollTop;
    if (scrolling > 450) {
      setIsVisible(true);
    } else if (scrolling <= 450) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleVisibility);
  return (
    <Button
      onClick={scrollToTop}
      style={{ display: isVisible ? "inline" : "none" }}
    >
      <BsHandIndexFill />
    </Button>
  );
};
export default BackToTopBtn;
