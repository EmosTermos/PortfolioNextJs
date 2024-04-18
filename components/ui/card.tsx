import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface CardProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

const Card: FC<CardProps> = ({
    title,
    children,
    className
}) => {
    return <div className={cn("relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground", className)}>
        <div className="flex flex-col gap-y-6">
            {
                title ? (<div className="font-pixel">
                        <p className="uppercase text-lg">{title}</p>
                    </div>
                    ): null
            }
            {children}
        </div>
    </div>
}

export default Card;