import Slider from 'react-slick';
import itemPicOne from '../img/first__reason.svg';
import card from '../img/card.jpg';

const SliderChoising = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    },
  };

  return (
    <div className="choising__info__with__pic">
      <Slider {...settings}>
        <div className="choising__info__with__pic__item">
          <div className="choising__pic">
            <img src={card} alt="" />
          </div>

          <div className="choising__info__logo">
            <img src={itemPicOne} alt="itemPicOne" />
          </div>

          <div className="choising__info__title">Оптимизация</div>
          <div className="choising__info__subtitle">
            Оптимизировать работы по сбору данных
          </div>
        </div>
        <div className="choising__info__with__pic__item">
          <div className="choising__pic">
            <img src={card} alt="" />
          </div>

          <div className="choising__info__logo">
            <img src={itemPicOne} alt="itemPicOne" />
          </div>

          <div className="choising__info__title">Оптимизация</div>
          <div className="choising__info__subtitle">
            Оптимизировать работы по сбору данных
          </div>
        </div>
        <div className="choising__info__with__pic__item">
          <div className="choising__pic">
            <img src={card} alt="" />
          </div>

          <div className="choising__info__logo">
            <img src={itemPicOne} alt="itemPicOne" />
          </div>

          <div className="choising__info__title">Оптимизация</div>
          <div className="choising__info__subtitle">
            Оптимизировать работы по сбору данных
          </div>
        </div>
        <div className="choising__info__with__pic__item">
          <div className="choising__pic">
            <img src={card} alt="" />
          </div>

          <div className="choising__info__logo">
            <img src={itemPicOne} alt="itemPicOne" />
          </div>

          <div className="choising__info__title">Оптимизация</div>
          <div className="choising__info__subtitle">
            Оптимизировать работы по сбору данных
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderChoising;
