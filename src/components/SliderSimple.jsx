import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import plugins from '../data/Plugins'
import ProductItem from './Products/ProductItem'

const SliderSimple = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="products__items">
      <Slider {...settings}>
        {plugins.map((info) => (
          <ProductItem {...info} />
        ))}
      </Slider>
    </div>
  )
}

export default SliderSimple
