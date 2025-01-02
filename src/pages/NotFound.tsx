import { AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
