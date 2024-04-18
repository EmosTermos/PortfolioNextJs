import { FC, ReactNode } from "react";
import CardHeader from "./card-header";
import CardVideo from "./card-video";

interface FeaturedCardProps{
    logo?: ReactNode;
    title: string;
    tag: string;
    video: string;
    active: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({logo, title, tag, video, active}) => {
    return <div className="link w-full h-full bg-secondary-background border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
        {/* Header */}
        <CardHeader title={title} tag={tag}/>
        {/* Body */}
        <div className="relative flex flex-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        {/* Video */}
        <CardVideo video={video} active={active}/>
        </div>
    </div>
}

export default FeaturedCard;