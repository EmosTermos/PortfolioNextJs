import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";
import { StaticImageData } from "next/image"
import Image from 'next/image'

interface VideoProps{
    video: string | StaticImageData ;
    active: boolean;
}


const CardVideo: FC<VideoProps> = ({video, active}) => {
    useEffect(() => {
        if (videoRef.current) {
            if (active){
                videoRef.current.play();
            }
            else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    })
    const videoRef = useRef<HTMLVideoElement | null>(null)
    return <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl w-full h-full">
        <Image
            src={video}
            alt={`A cute animal!`}
            width={100}
            height={100}
            className={cn("h-full w-full object-cover rounded-3xl", active ? "" : "grayscale")}/>
            
    </div>
}

export default CardVideo