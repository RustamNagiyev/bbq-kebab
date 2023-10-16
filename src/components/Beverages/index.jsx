import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const Beverages = () => {
  const images = [
    './pictures/cocacola.svg',
    './pictures/dietcola.svg',
    './pictures/sprite.svg',
    './pictures/pepper1.svg',
    './pictures/pepper2.svg',
    './pictures/pepsi.svg'
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 2
  };

  const renderSlides = () => {
    return images.map((image, index) => (
      <div key={index} className="slide">
        <img src={image} alt={`Slayt ${index + 1}`} />
        <p className='price'>1$</p>
      </div>
    ));
  };

  return (
    <div>
      <section className="beverages" id="beverages">
        <p className="bevh">Beverages</p>
        <p className="bevtext">*All stated prices are without applicable taxes</p>
        <div className="swiper">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
      </section>
    </div>
  );
};

export default Beverages;








