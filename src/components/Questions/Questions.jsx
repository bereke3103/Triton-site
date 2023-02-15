import React from 'react';
import QuestionsAnswers from './QuestionsAnswers';
import QuestionText from './QuestionText';

const Questions = ({ ru, kz, en }) => {
  return (
    <section className="questions" id="faq">
      <div className="container">
        <div className="questions__box">
          <QuestionText />

          <QuestionsAnswers ru={ru} kz={kz} en={en} />
        </div>
      </div>
    </section>
  );
};

export default Questions;
