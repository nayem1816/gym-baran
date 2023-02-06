import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="md:bg-transparent bg-white">
            <header className="container mx-auto md:my-7">
                <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 md:bg-transparent bg-white">
                    <div className="logo">
                        <Link href="/">
                            <h2 className="font-sporting text-xl fw-400 flex-items-center leading-8">
                                <span
                                    style={{ borderRadius: '10px' }}
                                    className="bg-indigo-500 text-white p-1 font-normal"
                                >
                                    Gym
                                </span>{' '}
                                <span className="text-indigo-500">baran</span>
                            </h2>
                        </Link>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div
                        className="hidden w-full md:flex md:items-center md:w-auto"
                        id="menu"
                    >
                        <ul className="pt-4 font-poppins text-base text-black md:flex md:justify-between md:pt-0">
                            <li>
                                <Link
                                    className="md:mx-5 py-2 block hover:text-indigo-500"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="md:mx-5 py-2 block hover:text-indigo-500"
                                    href="/program"
                                >
                                    Program
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="md:mx-5 py-2 block hover:text-indigo-500"
                                    href="/blog"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="md:mx-5 py-2 block hover:text-indigo-500"
                                    href="/about"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="md:mx-5 md:px-5 py-2 block hover:text-white-500 btn text-white bg-secondary"
                                    href="/login"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
