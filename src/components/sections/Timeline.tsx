import { type TimelineEvent } from '@/types/components'
import { createElement } from 'react'
import { getIcon } from '@/utils/iconRegistry'

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5 dark:bg-gray-700"></div>

      <div className="space-y-12">
        {events.map((event, index) => {
          const IconComponent = event.icon ? getIcon(event.icon) : null
          const isEven = index % 2 === 0

          return (
            <div
              key={event.id}
              className={`relative flex md:justify-between ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="ml-12 md:ml-0 md:w-5/12">
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                  <span className="text-sm font-semibold text-blue-500">
                    {event.year}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{event.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white md:left-1/2 md:-ml-4">
                {IconComponent ? (
                  createElement(IconComponent, { className: 'h-4 w-4' })
                ) : (
                  <div className="h-3 w-3 rounded-full bg-white" />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
