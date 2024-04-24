import { Timeline, TimelineItem } from '@/components/ui/timeline'
import React from 'react'

export default function EducationCard() {
  return (
    <div>
        <Timeline>
          {
            educationData.map((ed, i) => (
              <TimelineItem 
                key={i}
                date={ed.date}
                title={ed.title}
                subTitle={ed.subTitle}
                />
            ))
          }
        </Timeline>
    </div>
  )
}

const educationData = [
  {
    date: "03/2024 -- Present",
    title: "Master of Science in Information Technology",
    subTitle: "Uniwersytet WSB Merito",
  },
  {
    date: "03/2020 -- 07/2023",
    title: "Bachelor of Science in Information Technology",
  }
]
