import banner from '../../img/main.jpg';
import BannerAdvantages from './BannerAdvantages';
import { useTranslation } from 'react-i18next';
import '../utils/i18n';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="banner">
      <img src={banner} alt="Баннер" />

      <div className="container">
        <div className="banner__title">
          <h1>Корпоративное расследование</h1>
        </div>
      </div>
      <BannerAdvantages />
    </section>
  );
};

export default Banner;
