import Slider from 'react-slick';
import plugin from '../img/plagin.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderSimple = () => {
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
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
        <div className="products__item">
          <div className="products__item_pic">
            <img src={plugin} alt="plugin" />
          </div>

          <div className="products__item__text">
            <div className="products__item__uptitle">Плагин 3</div>
            <div className="products__item__title">
              Проверка зарубежных компаний
            </div>

            <div className="products__item__more__info">Подробнее</div>
            <span className="products__item__line"></span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSimple;
