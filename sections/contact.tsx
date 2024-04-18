import ContactCard from '@/components/cards/Contact/contact'
import Heading from '@/components/heading/heading'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Input from '@/components/ui/input'
import TextArea from '@/components/ui/text-area'
import React, { FormEvent, useRef } from 'react'
import { FaEnvelope, FaLinkedin, FaPhoneVolume, FaProjectDiagram, FaUser } from 'react-icons/fa'
import { MdEmail, MdSubject } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import emailjs from '@emailjs/browser'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'

export default function ContactSection() {
    const formRef=useRef<HTMLFormElement>(null!)
    const btnRef=useRef<HTMLButtonElement>(null)

    const sendEmail=(e:FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        emailjs.sendForm("service_zj7sq2u", "template_t5am4yw",formRef.current, "fn5d6dCEbQDilSQDP").then((response) => {
            console.log(response.text)
        },
        (error) => {
            console.log(error.text)
        })
    }
  return (
    <div id="contact" className="pt-24 px-3 lg:px-8">
        <Heading 
            number="03"
            title_1="Contact"
            title_2="Me"
            />
            <Card>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
                    {/* Contact cards */}
                    <div className="flex flex-col gap-8">
                        <ContactCard 
                            title="Have some thoughts about the page ?"
                            icon={ <FaEnvelope className="fill-[#333] text-lg"/>}
                            text="Send me feedback 🧐"
                            btnText="Email"
                            btnIcon={ <FaArrowRightArrowLeft />} 
                            isBtnIcon={true} />

                        <ContactCard 
                            title="Contact me through linkedin 😁"
                            icon={ <FaLinkedin className="fill-[#333] text-lg"/>}
                            btnText="Text me"
                            link="https://www.linkedin.com/in/kamil-d-076559217/" />
                    </div>
                    {/* Contact form */}
                    <form ref={formRef} onSubmit={sendEmail} className="lg:col-span-3 bg-secondary-background border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
                            <Input name="name" type="text" placeholder="Full name" icon={<FaUser />} />
                            <Input name="email" type="email" placeholder="Email Address" icon={<MdEmail />} />
                        </div>
                        <div className="flex items-center justify-between mb-4 gap-8">
                            <Input name="subject" type="text" placeholder="Subject" icon={<MdSubject />} />
                        </div>
                        {/* <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
                        </div> */}
                        <TextArea 
                            placeholder="Your message :)"
                            icon={<FaProjectDiagram />}
                            name="message"
                        />
                        <div className="w-full flex justify-end">
                            <div onClick={() => btnRef.current?.click()}>
                                <Button className="!w-44 !py-3 !text-xl hover:bg-lime-800">Send <SiMinutemailer /></Button>
                            </div>
                            <button type="submit" hidden ref={btnRef}></button>
                        </div>
                    </form>
                </div>
            </Card>
    </div>
  )
}
