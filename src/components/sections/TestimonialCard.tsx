import { TestimonialCardProps } from '@/types/components'
import Card from '../common/Card'

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <div className="flex flex-col items-center text-center">
        {testimonial.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-20 w-20 rounded-full object-cover"
          />
        )}
        <blockquote className="mt-4">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            "{testimonial.content}"
          </p>
        </blockquote>
        <div className="mt-4">
          <cite className="not-italic">
            <span className="block font-semibold">{testimonial.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}
            </span>
          </cite>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard
