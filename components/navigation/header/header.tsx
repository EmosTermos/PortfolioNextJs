import FancyButton from '@/components/ui/fancy-button'
import Profile from '@/components/ui/profile'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import { FaArrowRight } from "react-icons/fa";
import React, { FC, useState } from 'react'
import FullScreenMenu from './full-screen-menu/full-screen-menu';
import ToogleButton from './full-screen-menu/toogle-button';
import { AnimatePresence } from 'framer-motion';

interface HeaderProp{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  open: boolean
}

const Header: FC<HeaderProp> = ({open, setOpen}) => {
  return (
      <div className="w-full flex items-center justify-center md:justify-between">
          <Profile />
          <div className="hidden md:inline">
              <MagneticWrapper className="absolute bottom-5 left-5">
                  <FancyButton
                      text="Let's talk" 
                      link="/#contact"
                      icon={ <FaArrowRight /> } />
              </MagneticWrapper>
          </div>
          <ToogleButton open={open} setOpen={setOpen} />
          <AnimatePresence mode="wait">
            {
              open && <FullScreenMenu />
            }
          </AnimatePresence>
      </div>
      )
}

export default Header;
