import { useState } from 'react';
import axios from '../lib/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    try {
      const { data } = await axios.post('/api/admin/login', { email, password });
      localStorage.setItem('admin_token', data.token);
      window.location.href = (process.env.REACT_APP_ADMIN_PATH || '/admin/dashboard');
    } catch (e) {
      setErr(e.response?.data?.error || 'Login failed');
    }
  }

  return (
    <div className="min-h-screen bg-black text-blue-400 flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-full max-w-md p-8 bg-[#0b0b0b] rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4 text-blue-300">SmartTopUp Admin</h1>
        {err && <div className="bg-red-900 text-red-300 p-2 rounded mb-3">{err}</div>}
        <input className="w-full mb-3 p-3 bg-[#0a0a0a] border border-gray-800 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full mb-3 p-3 bg-[#0a0a0a] border border-gray-800 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full p-3 bg-blue-700 text-white rounded">Sign In</button>
      </form>
    </div>
  );
}