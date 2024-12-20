import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context'

const Navbar = () => {

    const { navbar, setNavbar } = useContext(AppContext)

    return (
        <div className='mt-5 overflow-x-scroll'>
            <div className='flex justify-start gap-3 lg:gap-7 whitespace-nowrap space-x-4'>
                <Link
                    to='/brand-of-the-year'
                    className='text-sm text-red-500 font-semibold'
                    onClick={() => setNavbar('brand-of-the-year')}
                >
                    Brand Of The Year
                    <hr className={`${navbar === 'brand-of-the-year' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
                <Link
                    to="/nuoc-hoa-nam"
                    className='text-sm hover:text-rose-600'
                    onClick={() => setNavbar('nuoc-hoa-nam')}
                >
                    Nước Hoa Nam
                    <hr className={`${navbar === 'nuoc-hoa-nam' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
                <Link
                    to="/nuoc-hoa-nu"
                    className='text-sm hover:text-rose-600'
                    onClick={() => setNavbar('nuoc-hoa-nu')}
                >
                    Nước Hoa Nữ
                    <hr className={`${navbar === 'nuoc-hoa-nu' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
                <Link
                    to="/nuoc-hoa-mini"
                    className='text-sm hover:text-rose-600'
                    onClick={() => setNavbar('nuoc-hoa-mini')}
                >
                    Nước Hoa Mini
                    <hr className={`${navbar === 'nuoc-hoa-mini' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
                <Link
                    to="/giftset"
                    className='text-sm hover:text-rose-600'
                    onClick={() => setNavbar('giftset')}
                >
                    Giftset
                    <hr className={`${navbar === 'giftset' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
                <Link
                    to="/thuong-hieu"
                    className='text-sm hover:text-rose-600'
                    onClick={() => setNavbar('thuong-hieu')}
                >
                    Thương Hiệu
                    <hr className={`${navbar === 'thuong-hieu' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
                <Link
                    to="/bodycare&homecare"
                    className='text-sm hover:text-rose-600'
                    onClick={() => setNavbar('bodycare&homecare')}
                >
                    Bodycare & Homecare
                    <hr className={`${navbar === 'bodycare&homecare' ? 'block' : 'hidden'} border-red-500`} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar