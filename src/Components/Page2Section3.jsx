import React from 'react'

const Page2Section3 = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="font-medium text-2xl">A few more facts about us in numbers</h2>
        <div className="flex justify-around w-[80%]">
            <div className="flex flex-col text-center">
                <h1 className="font-bold text-4xl">12,000+</h1>
                <h5 className="text-gray-500">Hours of play annually</h5>
            </div>
            <div className="flex flex-col text-center">
                <h1 className="font-bold text-4xl">89%</h1>
                <h5 className="text-gray-500">Player Retention Rate</h5>
            </div>
            <div className="flex flex-col text-center">
                <h1 className="font-bold text-4xl">1,200+</h1>
                <h5 className="text-gray-500">Active Members</h5>
            </div>
            <div className="flex flex-col text-center">
                <h1 className="font-bold text-4xl">125+</h1>
                <h5 className="text-gray-500">Annual Tournament</h5>
            </div>
        </div>
        <div className="w-screen h-1 bg-gray-200 my-10"></div>
    </div>
  )
}

export default Page2Section3