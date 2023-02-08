import { useState } from 'react'
import play from '../../img/play.svg'
import ReactPlayer from 'react-player'

const PluginItems = (props) => {
  const [showInfo, setShowInfo] = useState(1)
  const [disable, setDisable] = useState(true)
  const [disableBtn, setDisableBtn] = useState(true)

  //const toggleDisable = () => {
  //setDisable(!disable)
  //}

  const toggleShowInfo = (index) => {
    setShowInfo(index)
    if (index === 2) {
      setDisableBtn(!disableBtn)
    }
    if (index === 3) {
      setDisable(!disable)
    }
  }

  console.log(props)
  return (
    <div className="more__plugin__info">
      <div className="container">
        <div className="more__plugin__text">
          <div className="more__plugin__title__box">
            <div className="more__plugin__box__title">{props.title}</div>
            <div className="plugin__line"></div>
          </div>

          <div className="more__plugin__subtitle__box" id={props.id}>
            {props.information.map((info) => (
              <div
                className={
                  showInfo === info.id
                    ? 'more__plugin__subtitle active__tabs'
                    : 'more__plugin__subtitle'
                }
              >
                {info.itemInformation}
              </div>
            ))}
          </div>
        </div>

        <button disabled={disable} className="download__plugin">
          Скачать
        </button>

        <div className="more__plugin__instruct">
          <div className="text__btn__instruct">
            <button
              onClick={() => toggleShowInfo(props.information[0].id)}
              className={
                showInfo === props.information[0].id
                  ? 'btn__intsruct active'
                  : 'btn__intsruct'
              }
            >
              1
            </button>
            <div className="text__instruct">Плагин</div>
          </div>

          <div className="text__btn__instruct">
            <button
              onClick={() => toggleShowInfo(props.information[1].id)}
              className={
                showInfo === props.information[1].id
                  ? 'btn__intsruct active'
                  : 'btn__intsruct'
              }
            >
              1
            </button>
            <div className="text__instruct">Плагин</div>
          </div>

          <div className="text__btn__instruct">
            <button
              disabled={disableBtn}
              onClick={() => toggleShowInfo(props.information[2].id)}
              className={
                showInfo === props.information[2].id
                  ? 'btn__intsruct active'
                  : 'btn__intsruct'
              }
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
  )
}

export default PluginItems
