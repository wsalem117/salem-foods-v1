import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
      <Helmet>
        <title>React App</title>
        <meta name="description" content="React application with TypeScript" />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-white dark:bg-gray-900">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout
