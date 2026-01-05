import React from 'react'
import Navbar from './Navbar'
import HeroImg from '../assets/01_Hero.png'
import bottom from '../assets/02_bottom.png'
const Hero = () => {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col justify-between w-screen h-[80vh] mx-10 my-5 rounded-2xl bg-cover bg-center" style={{backgroundImage : `url(${HeroImg})`}}>
            <div className=" flex flex-col mt-20 gap-5 text-center text-white">
              <div>
                <h1 className="text-5xl font-medium">Unleash Your Inner Champion Today.</h1>
                <h1 className="text-5xl font-medium">All In One Place.</h1>
              </div>
              <div>
                <h4 className="font-light">Join the ultimate tennis experience - where passion meets performace.</h4>
                <h4 className="font-light">and every swing brings you closer to victory.</h4>
              </div>
              <div>
                <button className="border border-black px-3 py-2 rounded-3xl bg-black text-white font-light">
                  Start your own journey
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center p-6">
              <div className="flex">
                <div>
                  <h4 className="text-white font-light">Train with real Professtionals.</h4>
                  <h4 className="text-white font-light">Get the real results.</h4>
                </div>
                <img src={bottom} className="w-30"></img>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-1">
                  <h5 className="text-white font-light">Instagram</h5>
                  <i className="ri-arrow-right-up-line text-white"></i>
                </div>
                <div className="flex gap-1">
                  <h5 className="text-white font-light">Facebook</h5>
                  <i className="ri-arrow-right-up-line text-white"></i>
                </div>
                <div className="flex gap-1">
                  <h5 className="text-white font-light">Tik Tok</h5>
                  <i className="ri-arrow-right-up-line text-white"></i>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero