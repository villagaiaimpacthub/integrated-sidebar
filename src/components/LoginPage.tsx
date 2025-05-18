import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('sidebarDemoUser', username);
    // Set cookies for SSO
    document.cookie = `sidebar_user_email=${encodeURIComponent(username)}; path=/`;
    document.cookie = `sidebar_user_name=${encodeURIComponent(username)}; path=/`;
    onLogin(username);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#18181b]">
      <form onSubmit={handleSubmit} className="bg-[#23272f] p-10 rounded-xl shadow-xl w-96 flex flex-col gap-6 border border-[#23272f]">
        <h1 className="text-3xl font-bold text-center text-white mb-2">Sign in to Hive Alpha</h1>
        <input
          className="rounded-lg px-4 py-2 bg-[#23272f] text-white border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-[#f59e42] placeholder-gray-400"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          className="rounded-lg px-4 py-2 bg-[#23272f] text-white border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-[#f59e42] placeholder-gray-400"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#f59e42] hover:bg-[#e68a1a] text-white font-bold py-2 rounded-lg transition-colors shadow"
        >
          Sign In
        </button>
        <div className="text-xs text-gray-400 text-center mt-2">
          This is a temporary, insecure login for demo purposes only.
        </div>
      </form>
    </div>
  );
};

export default LoginPage; 