 
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('oteyo_token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:8000/api/profile/', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => { logout(); })
      .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (username, password) => {
    const res = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });
    localStorage.setItem('oteyo_token', res.data.access);
    setToken(res.data.access);
    return res.data;
  };

  const register = async (username, email, password) => {
    const res = await axios.post('http://127.0.0.1:8000/api/register/', { username, email, password });
    localStorage.setItem('oteyo_token', res.data.access);
    setToken(res.data.access);
    setUser(res.data.user);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('oteyo_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};