import React, { useState } from 'react'
import vniz from '../../img/vniz.png'

const QuestionAnswerItem = (props) => {
  const { question, answers } = props

  const [showToggle, setShowToggle] = useState(true)

  const handleToggleShow = () => {
    setShowToggle(!showToggle)
  }

  const styleShow = ['questions__answers__item__answer']
  const rotateClass = ['questions__answers__item__pic']
  if (showToggle) {
    rotateClass.push('active')
    styleShow.push('none')
  }

  return (
    <div className="questions__answers__item">
      <div className="questions__answers__title" onClick={handleToggleShow}>
        <div className="questions__answers__item__text">{question}</div>
        <div className={rotateClass.join(' ')}>
          <img src={vniz} alt="" />
        </div>
      </div>

      <div className={styleShow.join(' ')}>{answers}</div>

      <span className="questions__answers__line"></span>
    </div>
  )
}

export default QuestionAnswerItem
