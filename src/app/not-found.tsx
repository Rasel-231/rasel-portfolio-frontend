import Link from 'next/link'
import Images from "../assets/error.png"
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50">
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Responsive Image Wrapper */}
        <div className="w-full max-w-sm md:max-w-md">
          <Image 
            src={Images} 
            alt="Not Found" 
            className="w-full h-auto object-contain" 
            priority 
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-gray-800">
          404 - Page Not Found
        </h1>
        
        <p className="mt-2 text-sm md:text-base text-gray-600 px-4">
          Sorry, the page you are looking for does not exist.
        </p>
        
        <Link 
          href="/" 
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}