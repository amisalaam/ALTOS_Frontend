import React, { useEffect, useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo/AltosLogo.png'
import LoginBackground from '../../assets/LoginBg.jpg'
import axios from 'axios'




const Register = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const apiUrl = import.meta.env.VITE_API_URL;

    
    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post(`${apiUrl}/api/register/`, {
                fullName,
                email,
                password
            });
            console.log(response);
            if (response.status === 200) {
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
        }
    };





    return (

        <div className="gradient-form  bg-neutral-100 dark:bg-neutral-700 ">
            <div className="min-h-screen flex justify-center items-center px-20 mx-auto max-w-screen-2xl ">
                <div className="g-6 flex    text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* Left column container */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    {/* DARK MODE BUTTON */}
                                    <DarkModeToggle />

                                    <div className="md:mx-5 md:p-12">
                                        {/* Logo */}
                                        <div className="text-center">
                                            <img className="mx-auto w-48" src={Logo} alt="logo" />
                                        </div>

                                        <p className="mb-4 text-center text-neutral-800 dark:text-neutral-200">
                                            Please Register to your account
                                        </p>
                                        <form  onSubmit={handleRegister}>
                                            {/* Email input */}
                                            <div className="mb-4">
                                                <input
                                                    type="email"
                                                    required
                                                    name="email"
                                                    autoComplete="off"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="block w-full px-4 py-2 rounded border border-neutral-400 dark:border-neutral-600 bg-transparent focus:outline-none focus:ring focus:border-primary-500 dark:focus:border-primary-500 placeholder-neutral-500 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-300"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                />
                                            </div>

                                            {/* Name input */}
                                            <div className="mb-4">
                                                <input
                                                    type="name"
                                                    name="name"
                                                    required
                                                    autoComplete="off"
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}

                                                    className="block w-full px-4 py-2 rounded border border-neutral-400 dark:border-neutral-600 bg-transparent focus:outline-none focus:ring focus:border-primary-500 dark:focus:border-primary-500 placeholder-neutral-500 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-300"
                                                    placeholder="Full Name"
                                                />
                                            </div>

                                            {/* Password input */}
                                            <div className="mb-4">
                                                <input
                                                    name="password"
                                                    required
                                                    value={password}
                                                    

                                                    onChange={(e) => setPassword(e.target.value)}

                                                    type="password"
                                                    className="block w-full px-4 py-2 rounded border border-neutral-400 dark:border-neutral-600 bg-transparent focus:outline-none focus:ring focus:border-primary-500 dark:focus:border-primary-500 placeholder-neutral-500 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-300"
                                                    placeholder="Password"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <input
                                                    name="confirmPassword"
                                                    value={confirmPassword}
                                                    required    

                                                    onChange={(e) => setConfirmPassword(e.target.value)}

                                                    type="password"
                                                    className="block w-full px-4 py-2 rounded border border-neutral-400 dark:border-neutral-600 bg-transparent focus:outline-none focus:ring focus:border-primary-500 dark:focus:border-primary-500 placeholder-neutral-500 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-300"
                                                    placeholder="Confirm Password"
                                                />
                                            </div>

                                            {/* Submit button */}
                                            <div className="mb-6 text-center">
                                                <button type="submit" className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-3 px-10 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300">
                                                    Register
                                                </button>
                                            </div>
                                        </form>



                                        {/* Register button */}
                                        <div className="flex items-center justify-between">
                                            <p className="text-neutral-800 dark:text-neutral-200">
                                                Already have an account?
                                            </p>
                                            <Link
                                                to='/login'
                                                className="px-4 py-2 bg-transparent border border-danger text-danger-600 rounded hover:bg-danger-100 hover:text-danger-700 focus:outline-none focus:border-danger-600 focus:text-danger-600 dark:border-danger-400 dark:hover:bg-danger-100 dark:hover:text-danger-700 dark:focus:border-danger-400 dark:focus:text-danger-600"
                                            >
                                                Login
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                {/* Right column container with background and description */}
                                <div
                                    className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        backgroundImage: `url(${LoginBackground})`,
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
