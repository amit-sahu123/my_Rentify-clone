import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log('user', user)
    const router = useRouter();
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setUser(response.data.user);
            if (response.status === 200) {
                router.push('/')
            }
            const responseData = JSON.stringify(response.data);
            console.log('response data type:', typeof responseData);
            localStorage.setItem('userInfo', JSON.stringify(responseData));
            localStorage.setItem('token', response.data.token); // Save the token in local storage
            console.log('response register', response) // Save the token in local storage
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', userData);
            setUser(response.data.user);
            const responseData = JSON.stringify(response.data);
            localStorage.setItem('userInfo', responseData);
            localStorage.setItem('token', response.data.token); // Save the token in local storage
            console.log('response register', response)
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
        }
    };
    const logout = async () => {
        try {
            await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            localStorage.removeItem('userInfo');
            localStorage.removeItem('token');
            setUser(null);
            router.push('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    // const logout = () => {
    //     localStorage.removeItem('userInfo');
    //     localStorage.removeItem('token');
    //     setUser(null);
    // };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
