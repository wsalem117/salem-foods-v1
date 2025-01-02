import { CardProps } from '@/types/components'
import { cn } from '@/utils/cn'

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-md dark:bg-gray-800',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
