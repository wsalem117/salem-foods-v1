import { HeroBannerProps } from '@/types/components'
import { cn } from '@/utils/cn'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const HeroBanner = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroBannerProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[60vh] items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat',
        backgroundImage ? '' : 'bg-gradient-to-r from-blue-600 to-indigo-700'
      )}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-xl text-gray-200 sm:text-2xl">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <div className="mt-10">
            <Link to={ctaLink}>
              <Button size="lg">{ctaText}</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroBanner
