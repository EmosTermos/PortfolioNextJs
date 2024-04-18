import { Timeline, TimelineItem } from '@/components/ui/timeline'
import React from 'react'

export default function CertificationsCard() {
  return (
    <div>
        <Timeline>
          {
            cerificationData.map((ec, i) => (
              <TimelineItem 
                key={i}
                date={ec.date}
                title={ec.title}
                subTitle={ec.subTitle}
                link={ec.link}
                tag={ec.tag}
                />
            ))
          }
        </Timeline>
    </div>
  )
}

const cerificationData = [

  {
    date: "03/2021 -- 03/2024",
    title: "Microsoft Certified: Azure Developer Associate",
    subTitle: "AZ-204",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/?practice-assessment-type=certification",
    tag: "",
  },
  {
    date: "10/2020 -- 04/2021",
    title: "C# i .NET bootcamp",
    subTitle: "Coder Academy",
    link: "https://www.coderacademy.pl/kurs-net.php",
    tag: "On site",
  },
]
