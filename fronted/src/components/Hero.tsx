import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from '../assets/banner.js'
import Item from './item.js';
import all_item from '../assets/all_item.js'

const Hero = () => {

    const setting1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    const setting2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
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

            <div className='mt-8 px-10'>
                <p className='text-2xl font-semibold'>Brand Of The Year</p>
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