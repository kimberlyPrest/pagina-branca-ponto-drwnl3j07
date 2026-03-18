import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">404</h1>
        <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Retornar ao Início
        </a>
      </div>
    </div>
  )
}

export default NotFound
