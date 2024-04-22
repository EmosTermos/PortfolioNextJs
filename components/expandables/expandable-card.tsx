import projectData from '@/data/project'
import React, { useState } from 'react'
import ProjectCard from '../cards/Project/project-card'
import { cn } from '@/lib/utils'

export default function ExpandableCard() {
    const [hoverdIndex, setHoveredIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    }
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    }

  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gqp-x-4">
        {
            projectData.map((project, i) => (
                <div 
                key={i} 
                className={cn('relative h-[700px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out',
                i === hoverdIndex ? "lg:w-[40%]" : "lg:w-[33%]")}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave()}>
                    <ProjectCard 
                        active={i === hoverdIndex}
                        title={project.title}
                        tag={project.tag}
                        video={project.video}
                        link={project.link}
                    />
                </div>
            ))
        }

    </div>
  )
}
