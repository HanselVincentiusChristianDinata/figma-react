// src/Login.js
import React, { useState } from 'react';
import { Card } from "flowbite-react";
import login from '../assets/login.jpg'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'password') {
            setMessage('Login berhasil!');
        } else {
            setMessage('Username atau password salah.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex">
                {/* Gambar di sebelah kiri */}
                <img 
                    src={login} // Ganti dengan path gambar Anda
                    className="w-1/2 h-auto object-cover" // Atur ukuran gambar sesuai kebutuhan
                />
                <Card className="container w-1/2 p-5">
                    <h1>Selamat Datang di Aplikasi Login</h1>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="border rounded p-2"
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border rounded p-2"
                            />
                        </div>
                        <button type="submit" className="mt-4 bg-blue-500 text-white rounded p-2">Login</button>
                    </form>
                    {message && <p>{message}</p>}
                </Card>
            </div>
        </div>
    );
};

export default Login;