import React, { useContext } from 'react'
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { AiTwotoneShop } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import cong_dong_nuoc_hoa from '../assets/cong-dong-nuoc-hoa.png'
import xu_huong_nuoc_hoa from '../assets/xu-huong-nuoc-hoa.png'
import goc_review from '../assets/goc-review.png'
import feedbacks_instore from '../assets/feedbacks-instore.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/Context';

const Header = () => {

    const { setNavbar } = useContext(AppContext)

    return (
        <div className='flex flex-col mt-3.5 '>
            <div className='flex justify-between text-sm'>
                <p>Thương hiệu nước hoa uy tín từ 2013</p>
                <div className='flex items-center gap-2 relative'>
                    <p>Thông báo mới</p>
                    <FiBell className='text-xl text-gray-700' />
                    <div className='absolute -right-2 -top-2 px-[7px] rounded-full bg-red-500 text-[10px] text-white'>
                        5
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-3.5'>
                <Link
                    to='/'
                    className='text-red-500 text-3xl font-medium cursor-pointer'
                    onClick={() => setNavbar('/')}
                >
                    namperfume
                </Link>
                <div className='flex items-center border border-gray-300 rounded-md w-72 h-9 hover:border-gray-500'>
                    <IoIosSearch className='text-2xl text-gray-600 mx-2' />
                    <input type="text" className='w-full focus:outline-none pr-2.5' />
                    <TiDeleteOutline className='mr-2 text-gray-500 text-xl' />
                </div>

                <div className='flex items-center gap-1.5 text-gray-700'>
                    <AiTwotoneShop />
                    <p className='hover:text-red-500 cursor-pointer'>8 cửa hàng toàn quốc</p>
                </div>

                <div className='flex items-center gap-1.5 text-gray-700 relative group'>
                    <RiArticleLine />
                    <p className='group-hover:text-red-500 cursor-pointer'>Nmagazine</p>

                    <div className='absolute pt-8 top-2.5 -left-3.5 hidden group-hover:flex'>
                        <div className='border border-gray-300 bg-white w-max px-3.5 py-3.5 flex flex-col gap-3.5'>
                            <div className='flex items-center gap-3 border-b pb-2 cursor-pointer group/item'>
                                <img src={cong_dong_nuoc_hoa} className='w-11' alt="" />
                                <div className='flex flex-col '>
                                    <p className='text-sm font-medium'>Cộng Đồng Nước Hoa</p>
                                    <p className='text-xs font-extralight group-hover/item:text-red-500'>Thảo luận</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border-b pb-2 cursor-pointer group/item'>
                                <img src={xu_huong_nuoc_hoa} className='w-11' alt="" />
                                <div className='flex flex-col'>
                                    <p className='text-sm font-medium'>Xu Hướng Nước Hoa </p>
                                    <p className='text-xs font-extralight group-hover/item:text-red-500'>Tham gia</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3  border-b pb-2 cursor-pointer group/item'>
                                <img src={goc_review} className='w-11' alt="" />
                                <div className='flex flex-col'>
                                    <p className='text-sm font-medium'>Góc Review</p>
                                    <p className='text-xs font-extralight group-hover/item:text-red-500'>Thảo luận</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 cursor-pointer group/item'>
                                <img src={feedbacks_instore} className='w-11' alt="" />
                                <div className='flex flex-col'>
                                    <p className='text-sm font-medium'>Feedbacks & Instore</p>
                                    <p className='text-xs font-extralight group-hover/item:text-red-500'>Xem ngay</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-1.5 text-gray-700 relative group'>
                    <FaRegUser />
                    <p className='hover:text-red-500'>Đăng nhập</p>

                    <div className='absolute pt-8 top-2.5 -right-3.5 hidden group-hover:flex'>
                        <div className='border border-gray-300 bg-white w-max px-3.5 py-3.5 flex flex-col gap-3.5'>
                            <div className='flex items-center gap-5'>
                                <FaRegUser className='text-2xl' />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>Chào bạn,</p>
                                    <p className='text-xs font-light'>Đăng nhập để tham gia với chúng tôi</p>
                                </div>
                            </div>
                            <div className='flex text-xs font-bold justify-between text-center border-b pb-5'>
                                <div className='border border-gray-300 px-3.5 py-1 w-28 cursor-pointer hover:bg-red-500 hover:text-white'>
                                    Đăng nhập
                                </div>
                                <div className='border border-gray-300 px-3.5 py-1 w-28 cursor-pointer hover:bg-red-500 hover:text-white'>
                                    Đăng ký
                                </div>
                            </div>
                            <div className='text-sm font-bold flex flex-col'>
                                <p className='text-center'>Hoặc Đăng Nhập Với</p>
                                <div className='flex w-full hover:text-red-500 cursor-pointer group/item'>
                                    <div className='flex border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                                        <FcGoogle className='text-2xl ' />
                                    </div>
                                    <div className='flex w-full font-light  border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                                        Đăng Nhập Với Google
                                    </div>
                                </div>
                                <div className='flex w-full hover:text-red-500 cursor-pointer group/item'>
                                    <div className='flex border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                                        <FaFacebook className='text-2xl text-blue-500' />
                                    </div>
                                    <div className='flex w-full font-light  border border-gray-300 text-center mt-3.5 px-2 py-1 group-hover/item:border-red-500'>
                                        Đăng Nhập Với Facebook
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-7 text-gray-700'>
                    <div className='relative cursor-pointer'>
                        <FaRegHeart />
                        <div className='absolute -right-2 -top-2 size-4 rounded-full bg-red-500 text-[10px] text-white text-center'>
                            0
                        </div>
                    </div>
                    <div className='relative cursor-pointer group'>
                        <RiShoppingCartLine />
                        <div className='absolute -right-2 -top-2 size-4 rounded-full bg-red-500 text-[10px] text-white text-center'>
                            0
                        </div>
                        <div className='absolute pt-8 top-2.5 -right-3.5 hidden group-hover:flex'>
                            <div className='border border-gray-300 bg-white text-sm w-max px-3.5 py-2.5 flex flex-col gap-3.5'>
                                Chưa có sản phẩm nào trong giỏ hàng!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header