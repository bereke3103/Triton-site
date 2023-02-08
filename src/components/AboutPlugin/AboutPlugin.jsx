import video from '../../img/video.jpg';
import play from '../../img/play.svg';
import ReactPlayer from 'react-player';

const AboutPlugin = () => {
  return (
    <section className="more__plugin">
      <div className="more__plugin__box">
        <div className="more__plugin__info">
          <div className="container">
            <div className="more__plugin__text">
              <div className="more__plugin__title__box">
                <div className="more__plugin__box__title">Плагин 1</div>
                <div className="plugin__line"></div>
              </div>

              <div className="more__plugin__subtitle__box">
                <div className="more__plugin__subtitle">
                  Выявляйте риски в работе с казахстанскими контрагентами.
                </div>
                <div className="more__plugin__subtitle">
                  Выявляйте риски в работе с казахстанскими контрагентами.
                </div>
              </div>
            </div>

            <button className="download__plugin">Скачать</button>

            <div className="more__plugin__instruct">
              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>
            </div>
          </div>

          <div className="more__plugin__video">
            <div className="more__plugin__video__pic">
              <ReactPlayer
                url="https://youtu.be/SXLz3PBFbDs"
                width={720}
                height={483}
                playIcon={play}
              />
            </div>
            {/* <img src={play} alt="play" /> */}
          </div>
        </div>
        <div className="more__plugin__info">
          <div className="container">
            <div className="more__plugin__text">
              <div className="more__plugin__title__box">
                <div className="more__plugin__box__title">Плагин 1</div>
                <div className="plugin__line"></div>
              </div>

              <div className="more__plugin__subtitle__box">
                <div className="more__plugin__subtitle">
                  Выявляйте риски в работе с казахстанскими контрагентами.
                </div>
                <div className="more__plugin__subtitle">
                  Выявляйте риски в работе с казахстанскими контрагентами.
                </div>
              </div>
            </div>

            <button className="download__plugin">Скачать</button>

            <div className="more__plugin__instruct">
              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>
            </div>
          </div>

          <div className="more__plugin__video">
            <div className="more__plugin__video__pic">
              <ReactPlayer
                url="https://youtu.be/SXLz3PBFbDs"
                width={720}
                height={483}
                playIcon={play}
              />
            </div>
            {/* <img src={play} alt="play" /> */}
          </div>
        </div>
        <div className="more__plugin__info">
          <div className="container">
            <div className="more__plugin__text">
              <div className="more__plugin__title__box">
                <div className="more__plugin__box__title">Плагин 1</div>
                <div className="plugin__line"></div>
              </div>

              <div className="more__plugin__subtitle__box">
                <div className="more__plugin__subtitle">
                  Выявляйте риски в работе с казахстанскими контрагентами.
                </div>
                <div className="more__plugin__subtitle">
                  Выявляйте риски в работе с казахстанскими контрагентами.
                </div>
              </div>
            </div>

            <button className="download__plugin">Скачать</button>

            <div className="more__plugin__instruct">
              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button className="btn__intsruct">1</button>
                <div className="text__instruct">Плагин</div>
              </div>
            </div>
          </div>

          <div className="more__plugin__video">
            <div className="more__plugin__video__pic">
              <ReactPlayer
                url="https://youtu.be/SXLz3PBFbDs"
                width={720}
                height={483}
                playIcon={play}
              />
            </div>
            {/* <img src={play} alt="play" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlugin;
