import React from 'react'
import Card3 from '../assets/05_Card3.png'
import Card4 from '../assets/06_Card4.png'
const Page3 = () => {
  return (
    <div className="flex px-10 py-5 gap-10">
        <div className="flex flex-col w-[33%]  gap-5">
            <div className="flex justify-center items-center rounded-3xl border-gray-300 border w-18">
                <h3>Services</h3>
            </div>
            <h2 className="text-2xl font-medium">Explore our full range of coaching, training, and tennis experience. From first serve to match point - we've got the right program for you.</h2>
            <div className="flex justify-center py-2 mt-15 gap-2 bg-black text-white w-35 rounded-3xl">
                <h3 className="text-sm font-thin">Explore More</h3>
                <i class="ri-arrow-right-up-line"></i>
            </div>
        </div>
        <div className="flex flex-col justify-between w-[33%] p-5 border gap-5 rounded-4xl" style={{backgroundImage : `url(${Card3})`}}>
            <div className="flex w-45 p-5 py-3 rounded-3xl text-white bg-[rgba(235,237,230,0.52)]">
                <h2 >Training Programs</h2>
            </div>
            <div className="flex justify-between">
                <h3 className="w-[50%] text-white">Programs designed for all ages and abilities.</h3>
                <i className="flex justify-center items-center ri-arrow-right-up-line text-white w-8 h-8 bg-black rounded-[50%]"></i>
            </div>
        </div>
        <div className="flex flex-col justify-between w-[33%] p-5 border gap-5 rounded-4xl" style={{backgroundImage : `url(${Card4})`}}>
            <div className="flex w-35 p-5 py-3 rounded-3xl text-white bg-[rgba(235,237,230,0.52)]">
                <h2 >Court Access</h2>
            </div>
            <div className="flex justify-between">
                <h3 className="w-[50%] text-white">Hourly Court Rental</h3>
                <div className="flex gap-3">
                    <i className="flex justify-center items-center ri-arrow-left-line text-black w-8 h-8 bg-[rgba(235,237,230,0.52)] rounded-[50%]"></i>
                    <i className="flex justify-center items-center ri-arrow-right-line text-black w-8 h-8 bg-[rgba(235,237,230,0.52)] rounded-[50%]"></i>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Page3