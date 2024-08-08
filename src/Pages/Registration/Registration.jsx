import React, { useState } from 'react';
import './Registration.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/userSlice';
import Login from '../Login/Login';

const Registration = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleRegister = async () => {
    const userData = { name, email, password };
    dispatch(registerUser(userData))
      .unwrap()
      .then((newUser) => {
        onClose(newUser);
      })
      .catch((error) => {
        console.error('Registration Error:', error);
      });
  };

  return (
    <div className="registration-overlay">
      <button className="registration__close" onClick={() => onClose(null)}>
        &times;
      </button>
      <div className="registration">
        {showLogin ? (
          <Login onClose={() => setShowLogin(false)} />
        ) : (
          <>
            <h2>Регистрация</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
              <input
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Придумайте пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </label>
            <button onClick={handleRegister} disabled={loading}>
              {loading ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>
            <p>
              <span style={{ cursor: 'pointer' }} className="login-link" onClick={() => setShowLogin(true)}>
                Уже есть аккаунт?{' '}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;
