// SliderComponent.jsx
import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Slider Title</h2>
      <Slider {...settings}>
        <div>
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
