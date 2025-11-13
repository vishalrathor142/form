import React, { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.username === 'admin' && form.password === '12345') setMessage('Login successful');
    else setMessage('Invalid credentials');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full mb-3 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded w-full">Login</button>
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
    </div>
  );
}