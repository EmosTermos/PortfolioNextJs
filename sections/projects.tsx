import ExpandableCard from '@/components/expandables/expandable-card'
import Heading from '@/components/heading/heading'
import React from 'react'

export default function ProjectsSection() {
  return (
    <div id="projects" className='pt-24 px-3 lg:px-8 '>
        <Heading number="01" title_1="Projects" title_2=""/>
        <div className="mt-24">
          <ExpandableCard />
        </div>
    </div>
  )
}
