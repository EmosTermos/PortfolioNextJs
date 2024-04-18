import { FC } from "react"

interface SelectWrapperProps{
    title: string
    opt1: string
    opt2: string
    opt3?: string
    opt4?: string
}

const SelectWrapper: FC<SelectWrapperProps> = ({ title, opt1, opt2, opt3, opt4 }) => {
    return(
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="font-bold text-lg">{title}</h1>
            </div>
            <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                
            </div>
        </div>
    )
}

export default SelectWrapper