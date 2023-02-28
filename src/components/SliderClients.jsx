import Slider from 'react-slick';
import client from '../img/antikor.jpg';

const SliderClients = ({ clientName }) => {
  return (
    <div className="clients__item">
      <img src={`https://${clientName}`} alt="Картинки" />
    </div>
  );
};

export default SliderClients;
