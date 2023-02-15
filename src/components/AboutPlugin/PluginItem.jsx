import { useState } from 'react';
import play from '../../img/play.svg';
import ReactPlayer from 'react-player';
import tabs from '../../data/tab';

const PluginItems = (props) => {
  const { title, id, ru, kz, en, titleKZ, titleENG } = props;
  const [showInfo, setShowInfo] = useState(1);
  const [disable, setDisable] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  console.log(props.pluginInformations);

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
        <div className="more__plugin__text">
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

        <button disabled={disable} className="download__plugin">
          Скачать
        </button>
        <div className="more__plugin__instruct">
          {props.pluginInformations.map((i) => (
            <div className="text__btn__instruct" id={i.pluginModelId}>
              {/* <button
                // disabled
                // onClick={() => toggleShowInfo(props.information[0].id)}
                onClick={() => toggleShowInfo(i.tab)}
                className={
                  showInfo === i.tab ? 'btn__intsruct active' : 'btn__intsruct'
                }
              >
                {i.tab}
              </button> */}
              {/* <div className="text__instruct">Плагин</div> */}
            </div>
          ))}
          <div className="tabs">
            {tabs.map((t) => (
              <>
                <button
                  // disabled={disableBtn}
                  // onClick={() => toggleShowInfo(props.information[0].id)}
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
            url="https://youtu.be/SXLz3PBFbDs"
            width={720}
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
