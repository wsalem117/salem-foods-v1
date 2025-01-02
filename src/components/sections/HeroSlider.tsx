import { useState, useEffect } from 'react'
import HeroBanner from './HeroBanner'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

interface HeroSliderProps {
  slides: HeroSlide[]
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${index === currentSlide ? 'relative' : 'absolute inset-0'}`}
        >
          <HeroBanner {...slide} />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
