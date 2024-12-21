import React from 'react'
import { AiTwotoneShop } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";
import { RiRefund2Fill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";

const About = () => {
    return (
        <div className='px-3.5 sm:px-7 mt-20 mb-8 flex flex-col gap-10 items-center justify-center'>
            <p className='font-semibold text-2xl'>Về namperfume</p>
            <div className='flex justify-center flex-wrap gap-10 text-gray-800 text-5xl'>
                <div className='flex flex-col items-center cursor-pointer'>
                    <AiTwotoneShop />
                    <p className='text-sm'>8 Cửa hàng toàn quốc</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <BiMessageDetail />
                    <p className='text-sm'>Tư vấn online</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <FaTruck />
                    <p className='text-sm'>Freeship toàn quốc</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <IoMdGift />
                    <p className='text-sm'>Dịch vụ quà tặng</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <RiRefund2Fill />
                    <p className='text-sm'>Đổi trả miễn phí</p>
                </div>
            </div>
            <div className='text-center font-light text-xs'>
                <p className='mt-5 mb-3.5 font-medium text-base'>Hệ Thống Cửa Hàng</p>
                <p className='my-2'>420/6 Lê Văn Sỹ P.14, Q.3, TP. Hồ Chí Minh</p>
                <p className='my-2'>366A18 Phan Văn Trị, P.5, Q.Gò Vấp, TP. Hồ Chí Minh</p>
                <p className='my-2'>1379-1381 Đường 3/2, P.16, Q.11, TP. Hồ Chí Minh</p>
                <p className='my-2'>45-47 Cách Mạng Tháng 8, P.Bến Thành, Q.1, TP. Hồ Chí Minh</p>
                <p className='my-2'>8 Nguyễn Gia Trí, P.25, Q.Bình Thạnh, TP. Hồ Chí Minh</p>
                <p className='my-2'>252 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Minh</p>
                <p className='my-2'>123-125 Võ Thị Sáu, P.Thống Nhất, TP.Biên Hòa, T. Đồng Nai</p>
                <p className='my-2'>86 Mậu Thân, P.An Hòa, Q.Ninh Kiều, Cần Thơ</p>
            </div>

            <div className='flex gap-2 hover:text-red-500 cursor-pointer'>
                <p className='text-xs '>TÌM HIỂU THÊM</p>
                <FaLongArrowAltRight className='text-gray-700' />
            </div>

            <div className='flex gap-20 text-gray-700 text-xs'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='p-3.5 w-fit border-2 border-black rounded-full'>
                        <IoShieldCheckmarkOutline className='text-3xl' />
                    </div>
                    <p>100% Chính hãng</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <div className='p-3.5 w-fit border-2 border-black rounded-full'>
                        <IoMdGift className='text-3xl' />
                    </div>
                    <p>Ưu đãi đặc quyền</p>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <div className='p-3.5 w-fit border-2 border-black rounded-full'>
                        <FiCreditCard className='text-3xl' />
                    </div>
                    <p>Giao dịch an toàn uy tín</p>
                </div>
            </div>
        </div>
    )
}

export default About