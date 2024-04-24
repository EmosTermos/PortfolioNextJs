import React from 'react'
import ResumeButton from '@/components/ui/resume-button'
import { FaDownload } from 'react-icons/fa'
import Socials from '@/components/ui/socials'

export default function ResumeCard() {
  return (
    <div>
        <div>
            <p className="text-lg md:text-[1rem] xl:text-[1.125rem] 2xl:text-[1.25rem] font-medium text-primary-foreground">
                <span>I am an empathetic, analytical, and ambitious person.</span> 
                <br />
                My experience in both programming and managing infrastructure, on-premise and cloud-based, has allowed for a comprehensive development within the IT industry. 
                With a strong technical foundation and interpersonal skills, I effectively collaborate within project teams. My enthusiasm for computer science fuels my commitment to action and continuous improvement. 
                I am seeking opportunities for growth in the IT field, where I can continue to develop my skills and pursue my professional ambitions.
            </p>
        </div>
        <div className="h-7">
            <br />
        </div>
        <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 2xl: md:w-[calc(100%-48px)]">
            <Socials />
            <ResumeButton link="../../../public/assets/MyResume.pdf" className="hover:bg-lime-800">
                <FaDownload/>
                Resume
            </ResumeButton>
        </div>
    </div>
  )
}
