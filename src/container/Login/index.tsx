import React, { useState } from 'react';
import { LoginForm as LoginFormProps, LoginResponse } from '../../types';
import { LoginForm } from '../../components';

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const response = await fetch('https://mock-api.arikmpt.com/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResponse: { message: string } = await response.json(); 
        setError(errorResponse.message);
        return;
      }

      const responseData: LoginResponse | undefined = await response.json();
console.log('Response Data:', responseData);

if (responseData) {
  localStorage.setItem('token', responseData.token);
  console.log('Token in Local Storage:', localStorage.getItem('token'));
  window.location.replace('/home');
}
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('An error occurred:', error.message);
      }
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
