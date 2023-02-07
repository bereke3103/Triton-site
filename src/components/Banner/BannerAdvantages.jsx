import React from 'react';
import itemPicThird from '../../img/third__reason.svg';
import itemPicOne from '../../img/first__reason.svg';
import itemPicSecond from '../../img/second__reason.svg';
const BannerAdvantages = () => {
  return (
    <div className="banner__advantages">
      <div className="container">
        <div className="banner__advantages__items">
          <div className="banner__advantages__item">
            <div className="banner__advantages__item_pic">
              <img src={itemPicOne} alt="One" />
            </div>

            <div className="banner__advantages__item__subtitle">
              Оптимизировать работы по сбору данных
            </div>
          </div>
          <div className="banner__advantages__item">
            <div className="banner__advantages__item_pic">
              <img src={itemPicSecond} alt="One" />
            </div>

            <div className="banner__advantages__item__subtitle">
              Оптимизировать работы по сбору данных
            </div>
          </div>
          <div className="banner__advantages__item">
            <div className="banner__advantages__item_pic">
              <img src={itemPicThird} alt="One" />
            </div>

            <div className="banner__advantages__item__subtitle">
              Оптимизировать работы по сбору данных
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAdvantages;
