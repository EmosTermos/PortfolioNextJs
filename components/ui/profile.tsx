import React from 'react'
import Image from "next/image"
import MyImage from '@/public/assets/images/gallery/IMG_2062-square.png'

export default function Profile() {
  return (
    <div className="flex flex-1 items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
        <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
            <Image 
            src={MyImage}
            alt="My photo"
            className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
            />
            <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
        </div>
        <div className="font-medium ">
          <span className="block text-xl xs:hidden">Kamil</span>
          <span className="block text-xl xs:hidden">Dąbrowski</span>

          {/* 375px WIDTH */}
          <span className="hidden xs:flex text-3xl">Kamil Dąbrowski</span>
        </div>
    </div>
  )
}
