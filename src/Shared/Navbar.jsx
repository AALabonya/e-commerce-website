import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="bg-green-600 p-10">
                <div className="mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-lg">Your Logo</div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-white focus:outline-none focus:text-white"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 5C3 4.44772 3.44772 4 4 4C4.55228 4 5 4.44772 5 5C5 5.55228 4.55228 6 4 6C3.44772 6 3 5.55228 3 5ZM11 5C10.4477 5 10 4.55228 10 4C10 3.44772 10.4477 3 11 3C11.5523 3 12 3.44772 12 4C12 4.55228 11.5523 5 11 5ZM19 5C18.4477 5 18 4.55228 18 4C18 3.44772 18.4477 3 19 3C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5ZM4 8C3.44772 8 3 8.44772 3 9C3 9.55228 3.44772 10 4 10C4.55228 10 5 9.55228 5 9C5 8.44772 4.55228 8 4 8ZM12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9ZM20 9C19.4477 9 19 8.55228 19 8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18C4.55228 18 5 17.5523 5 17C5 16.4477 4.55228 16 4 16ZM12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17ZM20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H4ZM3 11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11ZM20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18H20Z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <ul className={`lg:flex ${isOpen ? 'bg-red-500 py-4 px-2 absolute lg:static top-[60px] space-y-4 lg:space-y-4  right-0 flex flex-col text-end w-1/2 delay-500 transition: 10s ease' : 'hidden'}`}>
                        <li className="mr-4">
                            <a href="#" className="text-white hover:text-gray-300">Home</a>
                        </li>
                        <li className="mr-4">
                            <a href="#" className="text-white hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 text-white hover:text-gray-300">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 text-white hover:text-gray-300">Login</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 text-white hover:text-gray-300">Registration</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar