import Slider from 'react-slick';
import itemPicOne from '../img/first__reason.svg';
import card from '../img/card.jpg';

const SliderChoising = ({
  title,
  titleKZ,
  titleENG,
  description,
  descriptionKZ,
  descriptionENG,
  nameFile,
  ru,
  kz,
  en,
}) => {
  console.log(title);
  return (
    <div className="choising__info__with__pic">
      <div className="choising__info__with__pic__item">
        <div className="choising__pic">
          <img src={`http://${nameFile}`} alt="" />
        </div>

        {/* <div className="choising__info__logo">
          <img src={itemPicOne} alt="itemPicOne" />
        </div> */}

        <div className="choising__info__title">
          {ru && title}
          {kz && titleKZ}
          {en && titleENG}
        </div>
        <div className="choising__info__subtitle">
          {ru && description}
          {kz && descriptionKZ}
          {en && descriptionENG}
        </div>
      </div>
    </div>
  );
};

export default SliderChoising;
