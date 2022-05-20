import { useState } from 'react';
import { useAuth } from '../../util/auth';
import { endpoints, fetchWrapper } from '../../util/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLogin } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const response = await fetchWrapper(endpoints.login, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        email,
        password,
      },
    });
    if (response.ok) {
      const userData = await response.json();
      onLogin(userData);
    } else {
      console.error('Username or Password is incorrect');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login Form</h3>
        <br />
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
