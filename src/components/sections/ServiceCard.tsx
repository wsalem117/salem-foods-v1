import { IconName, getIcon } from '@/utils/iconRegistry'
import Card from '../common/Card'
import { createElement } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconName
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const IconComponent = getIcon(icon)

  return (
    <Card className="text-center">
      {createElement(IconComponent, {
        className: 'mx-auto h-12 w-12 text-blue-500',
      })}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </Card>
  )
}

export default ServiceCard
