import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 h-auto bg-gray-900 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="text-lg text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  تسجيل الدخول
                </Link>
              </li>
              
              <li>
                <Link href="/signup" className="btn-sm text-lg text-white bg-purple-600 hover:bg-gray-900 ml-3">
                  اشتراك
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop navigation */}
          <div className="hidden xl:flex xl:grow">
            <ul className="flex grow justify-center flex-wrap items-center">
              
            <li>
              <Link
                  href="#newsletter"
                  className="text-lg text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                القائمة البريدية
                </Link>
              </li>

              <li>
              <Link
                  href="#testimonials"
                  className="text-lg text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  التوصيات
                </Link>
              </li>
            
              <li>
              <Link
                  href="#solutions"
                  className="text-lg text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  حلول
                </Link>
              </li>    

              <li>
                <Link
                  href="#features"
                  className="text-lg text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  خدمات
                </Link>
              </li>

            </ul>
          </div>

          {/* Site branding */}
          <div className="flex grow shrink-0 justify-center items-center">
            {/* Logo */}

            <Link href='/' className='hidden md:flex md:items-center md:gap-4'>
              <Image src='/images/logo.png' alt='logo' width={50} height={50} />
              {/* <p className='text-2xl font-bold text-white'>Mō K!</p> */}
             </Link>
          </div>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
