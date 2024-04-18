import FeaturedCard from '@/components/cards/featured-card'
import ExpandableCard from '@/components/expandables/expandable-card'
import Heading from '@/components/heading/heading'
import featuredData from '@/data/featured'
import React from 'react'

const MainFeatured = featuredData[0]

export default function ProjectsSection() {
  return (
    <div id="projects" className='pt-24 px-3 lg:px-8 '>
        {/*Heading*/}
        <Heading number="01" title_1="Projects" title_2=""/>
        {/*Main Featured Card*/}
        {/* <FeaturedCard active title={MainFeatured.title} tag={MainFeatured.tag} video={MainFeatured.video} /> */}
        <div className="mt-24">
          <ExpandableCard />
        </div>
    </div>
  )
}
