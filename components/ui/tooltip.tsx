import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FC, useState } from "react";
import Image from "next/image";

interface TooltipProps{
    title: string
    image: string | StaticImport
    bgColor?: string
}

const Tooltip: FC<TooltipProps> = ({title, image, bgColor}) => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <div className={cn("link relative bg-[#ffffff] lg:w-14 lg:h-14 transform cursor-pointer grid",
        "place-items-center border border-border rounded-xl hover:scale-110 transition-all duration-200 w-8 h-8")}
        style={{
            background: `${bgColor || "#ffffff"}`
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        >
            <div className="w-6 h-6 lg:w-10 lg:h-10 "> 
            <Image 
                src={image}
                alt={title}
                className="w-full h-full overflow-clip object-contain"
            />
            {
                active ? <div className="absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200">
                    <p className="font-pixel text-[10px] whitespace-nowrap">{title}</p>
                </div> : null
            }
            </div>
        </div>
    )
}

export default Tooltip