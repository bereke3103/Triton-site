import { useState } from 'react';

const FormFeedback = () => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      surname,
      name,
      email,
      questions: question,
    };

    const url = 'https://localhost:7183/feedbackPost';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    alert('Сообщение было отправлено администратору.');
    setSurname('');
    setName('');
    setEmail('');
    setQuestion('');
  };

  return (
    <div className="form__feedback" id="contact">
      <form onSubmit={sendMessage}>
        <div className="input__label">
          <label>Фамилия</label>
          <input
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="input__label">
          <label>Имя</label>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input__label">
          <label>Ваша почта</label>
          <input
            type="text"
            placeholder="Ваша почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input__label">
          <label>Задайте ваш вопрос</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            name=""
            id=""
            cols="34"
            rows="10"
          ></textarea>
        </div>

        <button type="Submit" className="btn__form__feedback">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default FormFeedback;
