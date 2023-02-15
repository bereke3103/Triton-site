import React, { useState } from 'react';
import vniz from '../../img/vniz.png';

const QuestionAnswerItem = (props) => {
  // console.log(props);
  const {
    question,
    questionKZ,
    questionENG,
    answer,
    answerKZ,
    answerENG,
    ru,
    kz,
    en,
  } = props;

  console.log(questionKZ);

  const [showToggle, setShowToggle] = useState(true);

  const handleToggleShow = () => {
    setShowToggle(!showToggle);
  };

  const styleShow = ['questions__answers__item__answer'];
  const rotateClass = ['questions__answers__item__pic'];
  if (showToggle) {
    rotateClass.push('active');
    styleShow.push('none');
  }

  return (
    <div className="questions__answers__item">
      <div className="questions__answers__title" onClick={handleToggleShow}>
        <div className="questions__answers__item__text">
          {ru && question}
          {kz && questionKZ}
          {en && questionENG}
        </div>
        <div className={rotateClass.join(' ')}>
          <img src={vniz} alt="" />
        </div>
      </div>

      <div className={styleShow.join(' ')}>
        {' '}
        {ru && answer}
        {kz && answerKZ}
        {en && answerENG}
      </div>

      <span className="questions__answers__line"></span>
    </div>
  );
};

export default QuestionAnswerItem;
