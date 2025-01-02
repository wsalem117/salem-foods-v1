import { SectionProps } from '@/types/components'
import { cn } from '@/utils/cn'
import Container from './Container'

const Section = ({ children, className, title, subtitle }: SectionProps) => {
  return (
    <section className={cn('py-12 md:py-16 lg:py-20', className)}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}

export default Section
