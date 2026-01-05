import React from 'react'
import card1 from '../assets/03_Card1.png'
import card2 from '../assets/04_Card2.png'
const Page2Section2 = () => {
  return (
    <div className="flex gap-16 m-10">
        <div className="flex flex-col gap-5 bg-[rgb(19,18,40)] rounded-3xl px-6 py-10 text-3xl w-[33%] text-white">
            <h3>Professional hard courts with tournament-grade lighting & climate control- play in perfect conditions, in any season.</h3>
            <div className="flex gap-2 justify-start items-center">
                <div className="flex justify-end items-center w-10 h-5 bg-blue-400 rounded-3xl">
                    <div className="w-3.5 h-3.5 bg-white rounded-3xl m-1"></div>
                </div>
                <div className="text-gray-500 text-lg">Game Mode</div>
            </div>
        </div>
        <div className="flex justify-center items-center bg-cover bg-center rounded-3xl  text-3xl w-[33%]" style={{backgroundImage : `url(${card1})`}}>
            <div className="flex justify-center items-center w-[60%] h-10 bg-[rgba(235,237,230,0.52)] rounded-3xl text-white text-xl font-light">
                <h5>Private & Group Lessons</h5>
            </div>
        </div>
        <div className="flex flex-col gap-7 bg-[#F8FBFF] rounded-3xl p-10 text-3xl w-[33%]">
            <div>
                <h1 className="font-medium text-5xl">100+</h1>
                <h3 className="font-medium">Pro Coaches</h3>
                <h4 className="text-sm w-[80%]">Certified professionals ready to boost your game from first serve to tournament level</h4>
            </div>
            <div>
                <img src={card2}></img>
            </div>
        </div>
    </div>
  )
}

export default Page2Section2