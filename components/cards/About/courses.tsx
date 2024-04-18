import { Timeline, TimelineItem } from '@/components/ui/timeline'
import React from 'react'

export default function CoursesCard() {
  return (
    <div>
        <Timeline>
          {
            coursesData.map((cd, i) => (
              <TimelineItem 
                key={i}
                date={cd.date}
                title={cd.title}
                subTitle={cd.subTitle}
                link={cd.link}
                tag={cd.tag}
                />
            ))
          }
        </Timeline>
    </div>
  )
}

const coursesData = [

    {
        date: "2024",
        title: "Dive Into Ansible - Beginner to Expert in Ansible - DevOps",
        subTitle: "Udemy",
        link: "https://www.udemy.com/course/diveintoansible/",
        tag: "",
    },
    {
        date: "2023",
        title: "Linux Administration: The Complete Linux Bootcamp",
        subTitle: "Udemy",
        link: "https://www.udemy.com/course/master-linux-administration",
        tag: ""
    },
    {
        date: "2023",
        title: "DevOps Beginners to Advanced with Projects",
        subTitle: "Udemy",
        link: "https://www.udemy.com/course/decodingdevops",
        tag: "",
    },
    {
        date: "2023",
        title: "Kubernetes for the Absolute Beginners - Hands-on",
        subTitle: "Udemy",
        link: "https://www.udemy.com/course/learn-kubernetes/",
        tag: "",
    },
    {
        date: "2023",
        title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
        subTitle: "Udemy",
        link: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/",
        tag: "",
    },
]
