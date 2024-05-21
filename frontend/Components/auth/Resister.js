import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const RegisterComponent = () => {
    const { register } = useAuth(); // Correct usage of useAuth
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('buyer'); 
    console.log('register in component', register)
    const router = useRouter();
    const handleRegister = (e) => {
        e.preventDefault();
        try {
            register({ firstName, lastName, email, phoneNumber, password, role });
            router.push('/');          
        } catch (error) {
            console.log('error', error)
        }
    };

    return (
        <div style={{minHeight:'90vh', alignItems:'center', display:"flex", justifyContent:'center'}}>
            <form
                style={{ minHeight: "300px", width: '300px', display: 'flex', flexDirection: 'column',   justifyContent: "center", alignItems: "center", gap: "20px", border: '1px solid gray', borderRadius: '10px', boxShadow: "1px 5px 10px 4px gray", padding: "20px", }}
                onSubmit={handleRegister}>
                <h2>Register</h2>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterComponent;
