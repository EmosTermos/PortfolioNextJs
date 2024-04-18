import Button from "@/components/ui/button";
import { FC, ReactNode } from "react"

interface ContactCardProps {
    title: string;
    icon: ReactNode;
    text?: string;
    btnText: string;
    link?: string;
    btnIcon?: ReactNode;
    isBtnIcon?: boolean
}

const ContactCard: FC<ContactCardProps> = ({ icon, btnText, text, title, link, btnIcon, isBtnIcon}) =>{
    return <div className="bg-secondary-background border border-border rounded-lg relative overflow-hidden py-5 pl-[25px] shadow-md ">
        <div className="z-20 flex flex-col justify-between items-start">
            {/* Header */}
            <div className="flex items-center gap-x-2">
                <span className="bg-white w-8 h-8 rounded-lg grid place-items-center">{icon}</span>
                <h1>{title}</h1>
            </div>

        </div>
        {/* Body text */}
        <div className="pt-2">
            <h2 className="font-bold text-2xl">{text}</h2>
        </div>
        <div className="flex flex-col items-end px-5">
            <Button isIcon={isBtnIcon} link={link} className="!w-24 hover:bg-lime-900">{btnIcon} {btnText}</Button>
        </div>

    </div>
}

export default ContactCard