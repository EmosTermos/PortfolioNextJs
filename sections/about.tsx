import CertificationsCard from '@/components/cards/About/certifications'
import CoursesCard from '@/components/cards/About/courses'
import EducationCard from '@/components/cards/About/education'
import ExperianceCard from '@/components/cards/About/experiance'
import GalleryCard from '@/components/cards/About/gallery'
import MeCard from '@/components/cards/About/me'
import ResumeCard from '@/components/cards/About/resume'
import StackCard from '@/components/cards/About/stack'
import Heading from '@/components/heading/heading'
import Card from '@/components/ui/card'
import React, { FC } from 'react'

interface AboutProps {
    open: boolean
}

const AboutSection: FC<AboutProps> = ({open}) => {

    return (
        <div id="about" className="pt-24 px-3 lg:px-8">
            <Heading 
                number="2"
                title_1="About"
                title_2="Me"
            />
    
            <div className="py-2 space-y-4" >
                <div className={` ${open ? "space-y-0 xs:grid xl:grid-cols-2 xs:grid-cols-1" : "space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3" } `}>
                    <Card title="Me" className="h-fit md:h-[650px]">
                        <MeCard />
                    </Card>
                    <Card title="Resume" className="h-fit md:h-[650px]">
                        <ResumeCard />
                    </Card>
                    <Card title="Stack" className="h-fit md:h-[650px]">
                        <StackCard />
                    </Card>
                    <div className={`${open ? "": " 2xl:hidden" }`}>
                        <GalleryCard />
                    </div>
                </div>
                <div className={` ${open ? "space-y-0 xs:grid xl:grid-cols-2 xs:grid-cols-1" : "space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3" } `}>
                    <div className="space-y-4">
                        <Card title="Courses">
                            <CoursesCard />
                        </Card>
                        <Card title="Certifications">
                            <CertificationsCard />
                        </Card>
                    </div>
                    <div className="space-y-4">
                        <Card title="Experiance">
                            <ExperianceCard />
                        </Card>
                        <Card title="My Education">
                            <EducationCard />    
                        </Card>
                    </div>
                    <div className={`${open ? "hidden": "hidden 2xl:flex" }`}>
                        <GalleryCard />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default AboutSection;

// export default function AboutSection() {
//   return (
//     <div id="about" className="pt-24 px-3 lg:px-8">
//         <Heading 
//             number="2"
//             title_1="About"
//             title_2='Me'
//         />

//         <div className="space-y-4 py-8">
//             <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
//                 <Card title="Me" className="h-fit md:h-[650px]">
//                     <MeCard />
//                 </Card>
//                 <Card title="Resume" className="h-fit md:h-[650px]">
//                     <ResumeCard />
//                 </Card>
//                 <Card title="Stack" className="h-fit md:h-[650px]">
//                         <StackCard />
//                 </Card>
//                 <div className="2xl:hidden">
//                     <GalleryCard />
//                 </div>
//             </div>
//             <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
//                 <div className="space-y-4">
//                     <Card title="Courses">
//                         <CoursesCard />
//                     </Card>
//                     <Card title="Certifications">
//                         <CertificationsCard />
//                     </Card>
//                 </div>
//                 <div className="space-y-4">
//                     <Card title="Experiance">
//                         <ExperianceCard />
//                     </Card>
//                     <Card title="My Education">
//                         <EducationCard />    
//                     </Card>
//                 </div>
//                 <div className="hidden 2xl:flex">
//                     <GalleryCard />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }
