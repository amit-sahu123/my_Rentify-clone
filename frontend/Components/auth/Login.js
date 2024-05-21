import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
const LoginComponent = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            router.push('/properties'); // Redirect to the properties page after login
        } catch (error) {
            console.log('error in login :', error)
        }
    };
    return (
        <div style={{ minHeight: '90vh', alignItems: 'center', display: "flex", justifyContent: 'center' }}>
            <form
                style={{ minHeight: "300px", width: '300px', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: "20px", border: '1px solid gray', borderRadius: '10px', boxShadow: "1px 5px 10px 4px gray" }} onSubmit={handleSubmit}
            >
                <h2>Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;
