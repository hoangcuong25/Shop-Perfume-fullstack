import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import { BiMessageDetail } from "react-icons/bi";

const Home = () => {
    return (
        <div className=''>
            <div className='bg-red-500 text-white py-1 hidden sm:block'>
                <p className='text-center text-sm'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</p>
            </div>
            <div className='px-3.5 sm:px-7'>
                <Header />
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
            <About />

            <div className='fixed bottom-3 left-3 bg-gray-100 rounded-full p-1 text-3xl text-red-500'>
                <BiMessageDetail />
            </div>
        </div>
    )
}

export default Home