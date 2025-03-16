import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kullanıcıyı localStorage'a kaydet
    localStorage.setItem('user', JSON.stringify({ username, password }));
    // Giriş başarılı ise ana sayfaya yönlendir
    navigate('/');
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#833e0a] to-[#d8b39d] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl text-center mb-4">Giriş Yap</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg mb-2">Kullanıcı Adı</label>
          <input
            id="username"
            type="text"
            placeholder="Kullanıcı adınızı girin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg mb-2">Şifre</label>
          <input
            id="password"
            type="password"
            placeholder="Şifrenizi girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-[#4b2e1e] text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#3e2416] transition-all duration-300 w-full"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Signing;
