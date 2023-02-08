import video from '../../img/video.jpg'
import play from '../../img/play.svg'
import ReactPlayer from 'react-player'
import { useState } from 'react'

const AboutPlugin = () => {
  const [showInfo, setShowInfo] = useState(1)

  const toggleShowInfo = (index) => {
    setShowInfo(index)
  }

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
                <div
                  className={
                    showInfo === 1
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ПЕРВАЯ ИНФОРМАЦИЯ
                </div>
                <div
                  className={
                    showInfo === 2
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ВТОРАЯ ИНФОРМАЦИЯ
                </div>
                <div
                  className={
                    showInfo === 3
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ТРЕТЬЯ ИНФОРМАЦИЯ
                </div>
              </div>
            </div>

            <button className="download__plugin">Скачать</button>

            <div className="more__plugin__instruct">
              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 1 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(1)}
                >
                  1
                </button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 2 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(2)}
                >
                  1
                </button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 3 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(3)}
                >
                  1
                </button>
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
                <div
                  className={
                    showInfo === 1
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ПЕРВАЯ ИНФОРМАЦИЯ
                </div>
                <div
                  className={
                    showInfo === 2
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ВТОРАЯ ИНФОРМАЦИЯ
                </div>
                <div
                  className={
                    showInfo === 3
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ТРЕТЬЯ ИНФОРМАЦИЯ
                </div>
              </div>
            </div>

            <button className="download__plugin">Скачать</button>

            <div className="more__plugin__instruct">
              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 1 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(1)}
                >
                  1
                </button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 2 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(2)}
                >
                  1
                </button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 3 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(3)}
                >
                  1
                </button>
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
                <div
                  className={
                    showInfo === 1
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ПЕРВАЯ ИНФОРМАЦИЯ
                </div>
                <div
                  className={
                    showInfo === 2
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ВТОРАЯ ИНФОРМАЦИЯ
                </div>
                <div
                  className={
                    showInfo === 3
                      ? 'more__plugin__subtitle active__tabs'
                      : 'more__plugin__subtitle'
                  }
                >
                  ТРЕТЬЯ ИНФОРМАЦИЯ
                </div>
              </div>
            </div>

            <button className="download__plugin">Скачать</button>

            <div className="more__plugin__instruct">
              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 1 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(1)}
                >
                  1
                </button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 2 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(2)}
                >
                  1
                </button>
                <div className="text__instruct">Плагин</div>
              </div>

              <div className="text__btn__instruct">
                <button
                  className={
                    showInfo === 3 ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                  onClick={() => toggleShowInfo(3)}
                >
                  1
                </button>
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
  )
}

export default AboutPlugin
