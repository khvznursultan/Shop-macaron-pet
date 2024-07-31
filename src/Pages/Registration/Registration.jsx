import React from 'react';
import './Registration.scss';

const Registration = ({ onClose }) => {
  return (
    <div className="registration-overlay">
      <div className="registration">
        <button className="registration__close" onClick={onClose}>
          &times;
        </button>
        <h2>Вход</h2>
        <label>
          <input type="text" placeholder="Логин" />
        </label>
        <label>
          <input type="password" placeholder="Пароль" />
        </label>
        <button>Вход</button>
      </div>
    </div>
  );
};

export default Registration;
