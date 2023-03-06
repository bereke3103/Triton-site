import { useEffect, useState } from 'react';
import questionAnswer from '../../data/QuestionsAnswers';
import QuestionAnswerItem from './QuestionAnswerItem';

const QuestionsAnswers = ({ ru, kz, en }) => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const url = 'http://46.101.153.165/getFaq';

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
            {...q}
            newKey={q.id}
            key={q.id}
            ru={ru}
            kz={kz}
            en={en}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
