import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import SliderClients from '../SliderClients';

const OurClients = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [client, setClient] = useState([]);

  useEffect(() => {
    const url = 'https://localhost:7183/getClient';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => setClient(result));
  }, []);
  console.log(client);
  return (
    <section className="clients">
      <div className="container">
        <div className="clients__title">Клиенты</div>
        <span className="clients__line"></span>
      </div>
      <div className="clients__items">
        <Slider {...settings}>
          {client.map((client) => (
            <SliderClients {...client} key={client.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;
