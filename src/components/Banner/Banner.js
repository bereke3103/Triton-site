import { useTranslation } from 'react-i18next';
import banner from '../../img/main.jpg';
import BannerAdvantages from './BannerAdvantages';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="banner">
      <img src={banner} alt="Баннер" />

      <div className="container">
        <div className="banner__title">
          <h1>{t('text')}</h1>
        </div>
      </div>
      <BannerAdvantages />
    </section>
  );
};

export default Banner;
