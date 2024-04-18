import { Timeline, TimelineItem } from '@/components/ui/timeline'
import React from 'react'

export default function ExperianceCard() {
  return (
    <div>
        <Timeline>
          {
            experianceData.map((ex, i) => (
              <TimelineItem 
                key={i}
                date={ex.date}
                title={ex.title}
                subTitle={ex.subTitle}
                link={ex.link}
                tag={ex.tag}
                />
            ))
          }
        </Timeline>
    </div>
  )
}

const experianceData = [

  {
    date: "02/2024 -- Present",
    title: "DevOps Engineer",
    subTitle: "Aformic",
    link: "https://aformic.com/",
    tag: "Hybrid",
  },
  {
    date: "07/2023 -- 02-2024",
    title: "Junior DevOps Engineer",
    subTitle: "AIUT",
    link: "https://aiut.com/",
    tag: "Remote",
  },
  {
    date: "01/2023 -- 04/2023",
    title: "Internship DevOps Engineer",
    subTitle: "Shiji",
    link: "https://pl.shijigroup.com/",
    tag: "Remote",
  },
  {
    date: "06/2022 -- 06/2023",
    title: "Junior FullStack Engineer",
    subTitle: "AIUT",
    link: "https://aiut.com/",
    tag: "Remote",
  },
  {
    date: "06/2021 -- 06/2022",
    title: "Junior .NET Developer",
    subTitle: "AIUT",
    link: "https://aiut.com/",
    tag: "Hybrid",
  }
]
