import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log('user', user)
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token); // Save the token in local storage
            localStorage.setItem('userInfo', response.data); // Save the token in local storage
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', userData);
            setUser(response.data.user);
            localStorage.setItem('userInfo', response.data);
            localStorage.setItem('token', response.data.token); // Save the token in local storage
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
        }
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
