import Slider from 'react-slick';
import client from '../img/antikor.jpg';

const SliderClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="clients__items">
      <Slider {...settings}>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
        <div className="clients__item">
          <img src={client} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderClients;
