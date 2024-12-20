import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from '../assets/banner.js'
import Item from './item.js';
import all_item from '../assets/all_item.js'
import banner_brand from '../assets/banner_brand.js'
import logo_brand from '../assets/logo_brand.js'
import { IoIosArrowDropright } from "react-icons/io";

const Hero = () => {

    const setting1 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    const setting2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className='mt-8'>
            <Slider {...setting1}>
                {HeroBanner.map((banner, index) => {
                    return (
                        <div key={index} className='!important flex justify-center'>
                            <img src={banner} alt="" />
                        </div>
                    )
                })}
            </Slider>

            <div className='mt-8 px-7'>
                <div className='flex justify-between'>
                    <p className='text-2xl font-semibold'>Thương Hiệu</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                <div className='mt-3.5 flex gap-3'>
                    <div className='w-1/2'>
                        <Slider {...setting1}>
                            {banner_brand.map((banner, index) => {
                                return (
                                    <div key={index} className='!important flex justify-center'>
                                        <img src={banner} alt="" />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className='w-1/2 grid grid-cols-4'>
                        {logo_brand.map((logo, index) => (
                            <div key={index}>
                                <img src={logo} className='w-32' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-8 px-7 '>
                <div className='flex justify-between mb-3.5'>
                    <p className='text-2xl font-semibold'>Brand Of The Year</p>
                    <div className='flex items-center gap-3.5 cursor-pointer text-gray-500'>
                        <p className=''>Xem thêm</p>
                        <IoIosArrowDropright />
                    </div>
                </div>

                <Slider {...setting2}>
                    {all_item.slice(0, 8).map((item, index) => {
                        return (
                            <Item id={item.id} key={index} image={item.image} brand={item.brands} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Hero