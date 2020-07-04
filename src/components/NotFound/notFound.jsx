import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.sass'

const NotFound = () => (
  <div className="not-found">
    <div className="scene">
      <div className="box">
        <div className="box__face box__face--front">4</div>
        <div className="box__face box__face--back">0</div>
        <div className="box__face box__face--right">4</div>
        <div className="box__face box__face--left">0</div>
        <div className="box__face box__face--top">0</div>
        <div className="box__face box__face--bottom">0</div>
      </div>
      <div className="box__shadow"></div>
    </div>

    <div className="error">
      <div className="error__title">
        Упс, страница не найдена
      </div>
      <Link to="/" className="error__btn">Вернутьтся на главную</Link>
    </div>
  </div>
);

export default NotFound;