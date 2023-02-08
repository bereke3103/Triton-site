import questionAnswer from '../../data/QuestionsAnswers';
import QuestionAnswerItem from './QuestionAnswerItem';

const QuestionsAnswers = () => {
  return (
    <div className="questions__answers">
      <div className="questions__answers__box">
        {questionAnswer.map((q) => (
          <QuestionAnswerItem
            newKey={q.id}
            key={q.id}
            question={q.question}
            answers={q.anwers}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
