import { useEffect, useState } from 'react';
import questionAnswer from '../../data/QuestionsAnswers';
import QuestionAnswerItem from './QuestionAnswerItem';

const QuestionsAnswers = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const url = 'https://localhost:7183/getFaq';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setFaq(result);
      });
  }, []);

  return (
    <div className="questions__answers">
      <div className="questions__answers__box">
        {faq.map((q) => (
          <QuestionAnswerItem
            newKey={q.id}
            key={q.id}
            question={q.question}
            answers={q.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
