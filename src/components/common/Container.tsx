import { ContainerProps } from '@/types/components'
import { cn } from '@/utils/cn'

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default Container
