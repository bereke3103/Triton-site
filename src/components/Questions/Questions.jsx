import React from 'react';
import QuestionsAnswers from './QuestionsAnswers';
import QuestionText from './QuestionText';

const Questions = () => {
  return (
    <section className="questions" id="faq">
      <div className="container">
        <div className="questions__box">
          <QuestionText />

          <QuestionsAnswers />
        </div>
      </div>
    </section>
  );
};

export default Questions;
