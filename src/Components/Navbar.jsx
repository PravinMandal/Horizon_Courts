import React from 'react'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
        <div className="font-bold">
          <h1 className="text-2xl">Horizon Courts</h1>
        </div>
        <div className="flex gap-8 items-center">
          <h4 className="border border-gray-500 px-2 py-1 rounded-full">About Us</h4>
          <h4>Services</h4>
          <h4>Coaches</h4>
          <h4>Events</h4>
          <h4>Contacts</h4>
        </div>
        <button className="flex items-center border-black px-6 py-2 gap-2 rounded-full bg-black text-white">
          Book now
          <i class="ri-arrow-right-up-line"></i>
        </button>
    </div>
  )
}

export default Navbar