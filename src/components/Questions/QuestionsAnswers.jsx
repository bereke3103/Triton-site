import { useState } from 'react';

import questionAnswer from '../../data/QuestionsAnswers';
import QuestionAnswerItem from './QuestionAnswerItem';

const QuestionsAnswers = () => {
  const [showToggle, setShowToggle] = useState(true);

  const handleToggle = (id) => {
    questionAnswer.map((q) => {
      if (q.id === id) {
        return setShowToggle(false);
      } else {
        return setShowToggle(true);
      }
    });
  };

  const styleShow = ['questions__answers__item__answer'];
  if (showToggle) {
    styleShow.push('none');
  }
  // const handleToggle = () => {
  //   setShowToggle(!showToggle);
  // };

  return (
    <div className="questions__answers">
      <div className="questions__answers__box">
        {questionAnswer.map((q) => (
          <QuestionAnswerItem
            key={q.id}
            question={q.question}
            answers={q.anwers}
            showToggle={showToggle}
            styleShow={styleShow}
            handleToggle={handleToggle}
          />
        ))}

        {/* <div className="questions__answers__item">
          <div className="questions__answers__title" onClick={handleToggle}>
            <div className="questions__answers__item__text">А как?</div>
            <div className="questions__answers__item__pic">
              <img src={vniz} alt="" />
            </div>
          </div>

          <div className={styleShow.join(' ')}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quas culpa totam sit et, temporibus delectus est facere atque ea
            consectetur nisi odit! Eum, necessitatibus sunt est voluptatum
            repudiandae fugit.
          </div>

          <span className="questions__answers__line"></span>
        </div>
        <div className="questions__answers__item">
          <div className="questions__answers__title" onClick={handleToggle}>
            <div className="questions__answers__item__text">А как?</div>
            <div className="questions__answers__item__pic">
              <img src={vniz} alt="" />
            </div>
          </div>

          <div className="questions__answers__item__answer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quas culpa totam sit et, temporibus delectus est facere atque ea
            consectetur nisi odit! Eum, necessitatibus sunt est voluptatum
            repudiandae fugit.
          </div>

          <span className="questions__answers__line"></span>
        </div>
        <div className="questions__answers__item">
          <div className="questions__answers__title">
            <div className="questions__answers__item__text">А как?</div>
            <div className="questions__answers__item__pic">
              <img src={vniz} alt="" />
            </div>
          </div>

          <div className="questions__answers__item__answer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quas culpa totam sit et, temporibus delectus est facere atque ea
            consectetur nisi odit! Eum, necessitatibus sunt est voluptatum
            repudiandae fugit.
          </div>

          <span className="questions__answers__line"></span>
        </div> */}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
