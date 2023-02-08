import ReactPlayer from 'react-player';
import play from '../../img/play.svg';

const Knowledge = () => {
  return (
    <section className="knowledge">
      <div className="knowledge__box">
        <div className="knowledge__text">
          <div className="knowledge__title">Схемы на любой вкус и цвет</div>
          <div className="knowledge__subtitle">
            Здесь описывается как все круто
          </div>
        </div>

        <div className="knowledge__play">
          <div className="knowledge__video">
            <ReactPlayer
              className="video__youtube"
              url="https://youtu.be/SXLz3PBFbDs"
              width="100%"
              height="100%"
            />
          </div>
          <div className="knowledge__play__pic">
            <img src={play} alt="" />
          </div>
          <div className="knowledge__play__text">Ознакомиться</div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
