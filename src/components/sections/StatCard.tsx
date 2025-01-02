import { createElement } from 'react'
import { IconName, getIcon } from '@/utils/iconRegistry'
import Card from '../common/Card'

interface StatCardProps {
  label: string
  value: string
  icon: IconName
}

const StatCard = ({ label, value, icon }: StatCardProps) => {
  const IconComponent = getIcon(icon)

  return (
    <Card className="text-center">
      {createElement(IconComponent, {
        className: 'mx-auto h-8 w-8 text-blue-500',
      })}
      <p className="mt-4 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </Card>
  )
}

export default StatCard
