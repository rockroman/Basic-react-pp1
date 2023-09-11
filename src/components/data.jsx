import lessonsImg from "../images/lessons-img-mobile-pexels.webp";
import CampsImg from "../images/camp-irish_camp-img-pexels.webp";
import ethanInstructor from "../images/our-team-img1-small-bobbie-jackson-unsplash.webp";
import natalyaInstructor from "../images/our-team-img2-mobile-gustavo-torres-unsplash.webp";
import henryInstructor from "../images/our-team-img3-mobile-janilson-furtado-unsplash.webp";
import jenifferInstructor from "../images/uor-team-img4-mobile-ting-tse-wang-unsplash.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

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
    text: "GARETSTOWN CAMP - (Kinsale)",
  },
  {
    id: "slide-2",
    slideClass: "slides-item slide-2",
    text: "RED STRAND CAMP - (Clonakilty)",
  },
  {
    id: "slide-3",
    slideClass: "slides-item slide-3",
    text: "ROCKY BAY CAMP - (Nohaval)",
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

export const instructors = [
  {
    id: 1,
    src: ethanInstructor,
    instructorName: "Ethan Stewart",
    text: "Ethan is founder of a company and a master level surfing instructor with more than 7 yrs. of experience",
    alt: "man holding a surfing board on a beach",
  },
  {
    id: 2,
    src: natalyaInstructor,
    instructorName: "Natalya Walsh",
    text: "Natalya is our Co-founder,certified lifeguard and surfing instructor with years of experience",
    alt: "young man with a cool haircut holding a surfing board on a beach",
  },
  {
    id: 3,
    src: henryInstructor,
    instructorName: "Henry Mcavoy",
    text: "Henry is surfing from age of 8 and now is mid level surf and stand Up Paddleboard instructor",
    alt: "young man with a cool haircut holding a surfing board on a beach",
  },
  {
    id: 4,
    src: jenifferInstructor,
    instructorName: "Jeniffer Wang",
    text: "Jeniffer is senior level surf instructor with long history of surfing ,now working as a personal instructor",
    alt: "Lady surfer riding a vawe looking very concentrated",
  },
];

export const contactCards = [
  {
    id: 1,
    cardClass: "adress",
    icon: <BsGeoAltFill />,
    title: " Address",
    text: "Garretstown Beach",
  },
  {
    id: 2,
    cardClass: "call",
    icon: <BsFillTelephoneFill />,
    title: "Talk to us ",
    text: "+35387999000",
  },
  {
    id: 3,
    cardClass: "mail",
    icon: <MdAlternateEmail />,
    title: "Email us",
    text: "surfon@gmail.com",
  },
];

export const appFooterLinks = [
  {
    id: 1,
    address: "https://www.facebook.com/",
    linkLabel: "link to company facebook page",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    address: "https://www.instagram.com/",

    linkLabel: "link to company instagram page",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    address: "https://twitter.com/?lang=en",
    linkLabel: "link to company twitter page",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    address: "https://www.linkedin.com/",
    linkLabel: "link to company linkedin page",
    icon: <BsLinkedin />,
  },
];
