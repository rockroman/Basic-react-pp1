import lessonsImg from "../images/lessons-img-mobile-pexels.webp";
import CampsImg from "../images/camp-irish_camp-img-pexels.webp";
export const navLinks = [
  { id: 1, href: "#lessons1", text: "Lessons" },
  { id: 2, href: "#camp", text: "Camps" },
  { id: 3, href: "#img-gallery", text: "Gallery" },
  { id: 4, href: "#about-us", text: "About Us" },
  { id: 5, href: "#contact-us", text: "Contact Us" },
];

export const LessonsCardData = [
  {
    id: 1,
    subtitle: "PERSONAL",
    type: "(1 ON 1)",
    price: "270 eur",
    text: "First lesson that our team would suggest.It is the quickest and most effective way to start learning how to surf",
  },
  {
    id: 2,
    subtitle: "GROUP",
    type: "(CORPORATE)",
    price: "170 eur",
    text: "Suggested If you like training and learning With two or more people in a group,can be adapted to total beginners",
  },
  {
    id: 3,
    subtitle: "KIDS",
    type: "(7-15yrs.)",
    price: "100 eur",
    text: "If your child is age 7-15,and would like to join us to learn how to surf.Our classes are perfect place to start.",
  },
];

export const carouselSlides = [
  {
    id: "slide-1",
    slideClass: "slides-item slide-1",
    text: "GARETSTOWN CAMP",
  },
  {
    id: "slide-2",
    slideClass: "slides-item slide-2",
    text: "RED STRAND CAMP",
  },
  {
    id: "slide-3",
    slideClass: "slides-item slide-3",
    text: "ROCKY BAY CAMP",
  },
];

export const service = [
  {
    id: 1,
    title: "LESSONS",
    src: lessonsImg,
    altText: "3 surfers on a rocky beach Carrying Surfboards",
    text: "Our proven learn to surf method is a systematic approach which creates fun, relaxed and supportive environment.you will get familiar with the art of surfing,technical skills,awareness in the ocean and beach safety. we provide a range of surf lessons kids group,private group and one-on-one lessons.",
  },
  {
    id: 2,
    title: "CAMPS",
    src: CampsImg,
    altText:
      "Terace full of parasols by the beautiful red and white lighthouse",
    text: "we can offer you to choose between our 3 beautiful camps all situated on a lovely Irish coast.Our highly trained professional instructors will pass onto you the knowledge,encourage and guide you through your surfing progression.",
  },
];
