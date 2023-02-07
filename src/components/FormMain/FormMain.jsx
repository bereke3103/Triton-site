import React from 'react';
import FormBox from './FormBox';
import FormFeedback from './FormFeedback';

const FormMain = () => {
  return (
    <section className="form__main">
      <div className="container">
        <div className="form__box__all">
          <FormBox />

          <FormFeedback />
        </div>
      </div>
    </section>
  );
};

export default FormMain;
