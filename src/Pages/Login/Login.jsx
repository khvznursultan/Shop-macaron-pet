import React, { useState } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/userSlice';

const Login = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { error: stateError, loading: stateLoading } = useSelector((state) => state.user);

    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            const resultAction = await dispatch(loginUser({ email, password }));
            if (loginUser.rejected.match(resultAction)) {
                setError(stateError);
            } else {
                onClose();
            }
        } catch (err) {
            setError('Ошибка входа. Проверьте ваши данные и попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <h2>Вход</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                />
            </label>
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Вход...' : 'Войти'}
            </button>
        </div>
    );
};

export default Login;
