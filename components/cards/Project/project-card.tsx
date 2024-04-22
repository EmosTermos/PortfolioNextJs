import { FC, ReactNode } from "react";
import CardHeader from "./card-header";
import CardVideo from "./card-video";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface FeaturedCardProps{
    logo?: ReactNode;
    title: string;
    tag: string;
    video: string | StaticImageData;
    active: boolean;
    link: string
}

const ProjectCard: FC<FeaturedCardProps> = ({logo, title, tag, video, active, link}) => {
    return <div className="link w-full h-full bg-secondary-background border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
        <CardHeader title={title} tag={tag}/>
        <div className="relative flex flex-none flex-nowrap p-6 w-full items-center justify-center h-[600px] border border-border rounded-3xl">
            <Link href={link} target="_blank">
                <CardVideo video={video} active={active}/>
            </Link>
        </div>
    </div>
}

export default ProjectCard;