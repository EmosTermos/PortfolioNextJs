import Tooltip from '@/components/ui/tooltip'
import { stackData } from '@/data/stack'
import React from 'react'

export default function StackCard() {
  return (
    <div className="flex flex-col gap-6 mt-2">
        {
            stackData.map((sd, i) => (
                <div
                    key={i}
                    className="grid items-center gap-[90px]"
                    style={{gridTemplateColumns: "50px 1fr"}}
                > 
                    <div className="h-auto flex-none break-words whitespace-pre">
                        <p className="text-secondary-foreground">{sd.title}</p>
                    </div>
                    <div className="flex gap-4">
                        {
                            sd.stack.map((t) => (
                                <Tooltip 
                                    key={t.id}
                                    title={t.title}
                                    image={t.image}
                                    bgColor={t.bgColor}
                                />
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}
