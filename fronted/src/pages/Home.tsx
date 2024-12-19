import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div>
            <div className='bg-red-500 text-white py-1'>
                <p className='text-center text-sm'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</p>
            </div>
            <div className='px-7'>
                <Header />
                <Navbar />
            </div>
            <div>
                <Hero />
            </div>
        </div>
    )
}

export default Home