import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react"

interface InputProps{
    icon?: ReactNode;
    placeholder: string;
    type: "email" | "text" | "password";
    name: string;
}

const Input: FC<InputProps> = ({icon, placeholder, type, name}) => {
    const [inputText, setInputText] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setInputText(text)
        console.log(text)
        setBackgroundColor(text ? true : false);
    }
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {icon}
            </div>
            <input value={inputText} onInput={handleInputChange} type={type} placeholder={placeholder} name={name} className={`${backgroundColor ? "bg-third-background" : "bg-primary-background"} " text-primary-foreground w-full rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none"`}/>
        </div>
    )
}

export default Input;