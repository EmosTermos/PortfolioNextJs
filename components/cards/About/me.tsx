import Card from '@/components/ui/card'
import React from 'react'
import MyImg from "@/public/assets/images/gallery/IMG_2062-square.png"
import Image from 'next/image'
import { ReactNode } from "react";
import { cn } from '@/lib/utils';

export default function MeCard() {
  return (
    <Card className='2xl:h-full'>
        <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
            <Image 
                src = {MyImg}
                alt = "Kamil Dąbrowski"
                className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
            />
            <div className="absolute top-[65%] space-y-2">
                <Tag text="Hello, world" classname="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                    <span className="wave">👋</span>
                </Tag>
                <Tag text="I'm KAMIL DĄBROWSKI" classname="rounded-tl-2xl  rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" />
                <Tag text="Full stack develper 🖥️⌨️🌐" classname="rounded-tl-2xl  rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" />
            </div>
        </div>
    </Card>
  )
}

const Tag = ({ text, classname, children }: {text: string; classname: string; children?: ReactNode}) => {
    return (
        <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3 rounded-full", classname)}>
            <p className="text-primary-foreground leading-[110%] font-bold">
               {text}{children}  
            </p>
        </div>
    )
}
