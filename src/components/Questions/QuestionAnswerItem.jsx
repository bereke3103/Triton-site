import React from 'react';
import vniz from '../../img/vniz.png';

const QuestionAnswerItem = (props) => {
  console.log(props);
  const { question, answers, showToggle, handleToggle, styleShow } = props;
  return (
    <div className="questions__answers__item">
      <div className="questions__answers__title" onClick={handleToggle}>
        <div className="questions__answers__item__text">{question}</div>
        <div className="questions__answers__item__pic">
          <img src={vniz} alt="" />
        </div>
      </div>

      <div
        // style=
        className={styleShow.join(' ')}
      >
        {answers}
      </div>

      <span className="questions__answers__line"></span>
    </div>
  );
};

export default QuestionAnswerItem;
