import Slider from 'react-slick';
import client from '../img/antikor.jpg';

const SliderClients = ({ clientName }) => {
  console.log(clientName);
  return (
    <div className="clients__item">
      <img src={clientName} alt="Картинки" />
    </div>
  );
};

export default SliderClients;
