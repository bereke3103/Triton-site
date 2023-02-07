import banner from '../../img/main.jpg';

import BannerAdvantages from './BannerAdvantages';

const Banner = () => {
  return (
    <section className="banner">
      <img src={banner} alt="Баннер" />

      <div className="container">
        <div className="banner__title">
          <h1>Решение корпоративных расследований</h1>
        </div>
      </div>
      <BannerAdvantages />
    </section>
  );
};

export default Banner;
