import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
import './cards.css'


const Cards = () => {
    return (
        <div className='flex justify-center items-center pt-20'>
            <div className='relative bg-green-400 group transition-transform delay-300 transform'>
                <div className='h-[250px] w-[250px] overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww"
                        alt="" className='h-[250px] w-[250px] transform transition-transform hover:scale-110' />
                </div>
                <div className='text-4xl w-full space-y-2 absolute top-1/2 left-2 translate-y-[-50%]  group-hover:block transition-transform delay-300 transform hidden hover:block '>
                    <div className='relative w-[60%] cursor-pointer showMenu'>
                        <CiShoppingCart className='bg-white p-1 rounded-full hover:bg-green-500' />
                        <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-red-500 left-12 top-1/2 translate-y-[-50%]'>
                            <h1 className='z-50'>Add to cart</h1>
                            <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-red-500 text-sm h-3 absolute'></div>
                        </div>
                    </div>
                    <div className='relative w-[60%] cursor-pointer showMenu'>
                        <FiEye className='bg-white p-1 rounded-full hover:bg-green-500' />
                        <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-red-500 left-12 top-1/2 translate-y-[-50%]'>
                            <h1 className='z-50'>Short View</h1>
                            <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-red-500 text-sm h-3 absolute'></div>
                        </div>
                    </div>
                    <div className='relative w-[60%] cursor-pointer showMenu'>
                        <MdCompareArrows className='bg-white p-1 rounded-full hover:bg-green-500' />
                        <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-red-500 left-12 top-1/2 translate-y-[-50%]'>
                            <h1 className='z-50'>Compare items</h1>
                            <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-red-500 text-sm h-3 absolute'></div>
                        </div>
                    </div>
                    <div className='relative w-[60%] cursor-pointer showMenu'>
                        <CiShoppingCart className='bg-white p-1 rounded-full hover:bg-green-500' />
                        <div className='menuItem hidden text-sm px-1 rounded-sm text-white absolute bg-red-500 left-12 top-1/2 translate-y-[-50%]'>
                            <h1 className='z-50'>Add to cart</h1>
                            <div className='w-3 top-1 -left-1 z-[-50] rotate-45 bg-red-500 text-sm h-3 absolute'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards