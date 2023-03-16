import { useState } from 'react';
import play from '../../img/play.svg';
import ReactPlayer from 'react-player';
import tabs from '../../data/tab';

const PluginItems = (props) => {
  // console.log(props);
  const { title, id, ru, kz, en, titleKZ, titleENG } = props;
  const [showInfo, setShowInfo] = useState(1);
  const [disable, setDisable] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  console.log(props);
  // console.log(props.pluginInformations);/

  //const toggleDisable = () => {
  //setDisable(!disable)
  //}

  const toggleShowInfo = (index) => {
    setShowInfo(index);
    if (index === 2) {
      setDisableBtn(false);
    }
    if (index === 3) {
      setDisable(false);
    }
  };

  // console.log(props);
  return (
    <div className="more__plugin__info">
      <div className="container">
        <div style={{ marginBottom: 138 }} className="more__plugin__text">
          <div className="more__plugin__title__box">
            <div className="more__plugin__box__title">
              {ru && title}
              {kz && titleKZ}
              {en && titleENG}
            </div>
            <div className="plugin__line"></div>
          </div>

          <div className="more__plugin__subtitle__box">
            {props.pluginInformations.map((info) => (
              <div
                className={
                  showInfo === info.tab
                    ? 'more__plugin__subtitle active__tabs'
                    : 'more__plugin__subtitle'
                }
              >
                {ru && info.itemInformation} {kz && info.itemInformationKZ}{' '}
                {en && info.itemInformationENG}
              </div>
            ))}
          </div>
        </div>

        {disable ? (
          <button disabled={disable} className="download__plugin">
            Скачать
          </button>
        ) : (
          <a href={`${props.pluginName}`} download className="download__plugin">
            Скачать
          </a>
        )}
        {/* <button disabled={disable} className="download__plugin">
        Скачать
        </button> */}
        <div className="more__plugin__instruct">
          {props.pluginInformations.map((i) => (
            <div className="text__btn__instruct" id={i.pluginModelId}></div>
          ))}
          <div className="tabs">
            {tabs.map((t) => (
              <>
                <button
                  onClick={() => toggleShowInfo(t.id)}
                  className={
                    showInfo === t.id ? 'btn__intsruct active' : 'btn__intsruct'
                  }
                >
                  {t.id}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="more__plugin__video">
        <div className="more__plugin__video__pic">
          <ReactPlayer
            url={props.urlVideo}
            width={750}
            height={483}
            playIcon={play}
          />
        </div>

        {/* <img src={play} alt="play" /> */}
      </div>
      <div className="more__plugin__video1200">
        <div className="more__plugin__video__pic1200">
          <ReactPlayer
            url={props.urlVideo}
            width={500}
            height={483}
            playIcon={play}
          />
        </div>

        {/* <img src={play} alt="play" /> */}
      </div>
    </div>
  );
};

export default PluginItems;
