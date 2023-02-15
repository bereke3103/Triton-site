import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import plugins from '../data/Plugins'
import ProductItem from './Products/ProductItem';
import { useEffect, useState } from 'react';

const SliderSimple = ({ ru, kz, en }) => {
  const [plugins, setPlugins] = useState([]);
  useEffect(() => {
    const url = 'https://localhost:7183/getPlugin';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setPlugins(result);
      });
  }, []);
  // console.log(plugins);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="products__items">
      <Slider {...settings}>
        {plugins.map((info) => (
          <ProductItem ru={ru} kz={kz} en={en} {...info} key={info.id} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderSimple;
