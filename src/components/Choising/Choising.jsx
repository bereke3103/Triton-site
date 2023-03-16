import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SliderChoising from '../SliderChoising';

const Choising = ({ ru, kz, en }) => {
  const [choisings, setChoisings] = useState([]);
  const [cards, setCards] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    },
  };
  useEffect(() => {
    const url = 'http://165.227.162.166/getChoising';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setChoisings(result);
      });
  }, [choisings]);

  useEffect(() => {
    const url = 'http://165.227.162.166/getCard';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => setCards(result));
  }, []);

  return (
    <section className="choising" id="choising">
      <div className="container">
        <div className="choising__box">
          {choisings.map((choise) => (
            <div key={choise.id} className="choising__info">
              <div className="choising__title">
                {ru && choise.title}
                {kz && choise.titleKZ}
                {en && choise.titleENG}
              </div>
              <div className="choising__subtitle">
                {ru && choise.text}
                {kz && choise.textKZ}
                {en && choise.textENG}
              </div>
            </div>
          ))}

          <Slider {...settings}>
            {cards.map((card) => (
              <SliderChoising {...card} key={card.id} ru={ru} kz={kz} en={en} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Choising;
