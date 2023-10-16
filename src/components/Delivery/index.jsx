import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styless.css";
// Object yaratdiq ki bunlari map edeceyik
const reklamLogo = [
  {
    id: 1,
    name: "Uber Eats",
    img: "./pictures/ubereats.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
  {
    id: 2,
    name: "Doordash",
    img: "./pictures/doordash.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
  {
    id: 3,
    name: "Uber Eats",
    img: "./pictures/ubereats.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
  {
    id: 4,
    name: "Doordash",
    img: "./pictures/doordash.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
];

// buna ehdiyyac yoxdur cunki bele bir object yaratma

//   const images = {

//     // './pictures/ubereats.svg',
//     // './pictures/doordash.svg',
//     // './pictures/ubereats.svg',
//     // './pictures/doordash.svg'
//   };

// CArusel ucun yaradilib
const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const Delivery = () => {
  const renderSlides = () => {
    return reklamLogo.map((reklam, index) => (
      <div className="boyukDiv">
        <div key={index} className="slide">
          <div className="back">
            <img src={reklam.img} className="slideimg" alt="reklam img" />
          </div>
          <p className="namep">{reklam.name}</p>
          <p className="nametext">{reklam.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section className="delivery" id="delivery">
        <p className="h1">Delivery</p>
        <hr className="hr"></hr>
        <p className="maintext">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="swiper">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styless.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function Delivery() {
//   return (
//     <>
//     <section className='delivery' id='delivery'>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//       </section>
//     </>
//   );
// }
