import { useState } from 'react';
import { clearUserData } from '../../util/auth';
import { endpoints, fetchWrapper } from '../../util/api';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const response = await fetchWrapper(endpoints.signup, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        email,
        password,
      },
    });
    if (response.ok) {
      clearUserData();
      console.log('User created successfully');
    } else {
      console.error('Please try again');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Signup Form</h3>
        <br />
        <input
          type="text"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
