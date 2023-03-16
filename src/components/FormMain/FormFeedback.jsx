import { useState } from 'react';

const FormFeedback = () => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [emailErrorDirty, setEmailErrorDirty] = useState(false);

  const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErrorDirty(true);
    } else {
      setEmailErrorDirty(false);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      surname,
      name,
      email,
      questions: question,
    };

    if (emailErrorDirty === true) {
      return alert('Введите корректную почту');
    }

    const url = 'http://165.227.162.166/feedbackPost';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json();
          alert('Сообщение было отправлено администратору.');
        } else {
          alert('Произошла ошибка');
        }
      })
      .then((result) => console.log(result));

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
            required
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="input__label">
          <label>Имя</label>
          <input
            required
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input__label">
          {emailErrorDirty ? (
            <label style={{ color: 'red' }}>Введите корректный email</label>
          ) : (
            <label>Ваша почта</label>
          )}
          <input
            required
            type="text"
            placeholder="Ваша почта"
            value={email}
            onChange={(e) => emailHandler(e)}
          />
        </div>
        <div className="input__label">
          <label>Задайте ваш вопрос</label>
          <textarea
            required
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
