import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({
    image,
    brand,
    name,
    newPrice,
    oldPrice,
    id
}) => {
    return (
        <Link onClick={() => window.scrollTo(0, 0)}>
            <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-500 mx-3">
                <img src={image} alt="" className="md:size-[237px] size-[185px]" />
                <h3 className="font-semibold lg:text-[22px] ">{brand}</h3>
                <h4 className="italic w-[300px] text-center lg:text-[16px] lg:px-8 px-10 text-gray-900">{name}</h4>
                <h5 className="mt-3 lg:text-[17px]  md:text-[13px]">New Price: ${newPrice}</h5>
                <h5 className="line-through lg:text-[17px] md:text-[13px]  text-slate-400  color: rgb(71 85 105);">Old Price ${oldPrice}</h5>
            </div>
        </Link>
    )
}

export default Item