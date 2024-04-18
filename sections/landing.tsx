import Header from '@/components/navigation/header/header'
import FancyButton from '@/components/ui/fancy-button'
import LiveClock from '@/components/ui/live-clock'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import React, { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface LandingProp{
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LandingSection: FC<LandingProp> = ({ open, setOpen }) => {
  return (
    <div id="landing" className="relative h-screen overflow-hidden p-8">
      <Header open={open} setOpen={setOpen} />
      <div className="absolute bottom-20 xs:bottom-30 sm:bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
                <FancyButton
                    text="Let's talk" 
                    icon={ <FaArrowRight /> } />
          </MagneticWrapper>
      </div>
      <div className="absolute right-10 bottom-6 xs:bottom-10">
        <LiveClock timeZone='Europe/Warsaw' />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[10vw] lg:leading-[10vw] 2xl:leading-[9rem] tracking-[0.1rem] xs:tracking-[0.2rem] md:tracking-[0.3rem] w-full" >
        <div className="flex flex-col justify-center items-center text-[0.75rem] xs:text-base md:text-sm xl:text-xl text-primary-foreground uppercase">
          <div className="hidden md:flex">
            <span>Remember that success is a process, not an end in itself.</span>
          </div>
          <div className="hidden md:flex">
            <span>If you focus on getting better every day,</span>
          </div>

          <div className="flex md:hidden">
            <span>Remember that success is a process,</span>
          </div>
          <div className="flex md:hidden">
            <span>not an end in itself.</span>
          </div>
          <div className="flex md:hidden">
            <span>If you focus on getting better every day,</span>
          </div>

          <div className="relative">
            <span> you will eventually reach your goal.</span>   

              <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 md:left-[22rem] xl:left-[40rem] 2xl:left-[52rem] w-[30rem] uppercase font-normal" >
                <span>Kobe Bryant</span>
                <br />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingSection;

// export default function LandingSection({open, setOpen}) {
//   return (
//     <div id="landing" className="relative h-screen overflow-hidden p-8">
//       <Header />
//       <div className="absolute bottom-20 xs:bottom-30 sm:bottom-36 left-10 z-20 md:hidden">
//         <MagneticWrapper>
//                 <FancyButton
//                     text="Let's talk" 
//                     icon={ <FaArrowRight /> } />
//           </MagneticWrapper>
//       </div>
//       <div className="absolute right-10 bottom-6 xs:bottom-10">
//         <LiveClock timeZone='Europe/Warsaw' />
//       </div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[10vw] lg:leading-[10vw] 2xl:leading-[9rem] tracking-[0.1rem] xs:tracking-[0.2rem] md:tracking-[0.3rem] w-full" >
//         <div className="flex flex-col justify-center items-center text-[0.75rem] xs:text-base md:text-sm xl:text-xl text-primary-foreground uppercase">
//           <div className="hidden md:flex">
//             <span>Remember that success is a process, not an end in itself.</span>
//           </div>
//           <div className="hidden md:flex">
//             <span>If you focus on getting better every day,</span>
//           </div>

//           <div className="flex md:hidden">
//             <span>Remember that success is a process,</span>
//           </div>
//           <div className="flex md:hidden">
//             <span>not an end in itself.</span>
//           </div>
//           <div className="flex md:hidden">
//             <span>If you focus on getting better every day,</span>
//           </div>

//           <div className="relative">
//             <span> you will eventually reach your goal.</span>   

//               <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 md:left-[22rem] xl:left-[40rem] 2xl:left-[52rem] w-[30rem] uppercase font-normal" >
//                 <span>Kobe Bryant</span>
//                 <br />
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }
