import { Button } from '@/components/ui/button'
import { Logo } from '../../public/images'

const NavBar = () => {
  return (
    <header className='bg-QAlmostWhite'>
      <nav className='flex justify-between items-center py-5 px-2 max-w-screen-xl mx-auto '>
        <div className='mr-10'>
          <img src={Logo} alt='Logo' />
        </div>
        <ul className=' text-QMediumGray mr-auto hidden sm:flex gap-10 font-semibold'>
          <div>
            <li className='hover:text-black cursor-pointer'>Features </li>
          </div>
          <li className='hover:text-black cursor-pointer'>Category</li>
          <li className='hover:text-black cursor-pointer'>Careers</li>
          <li className='hover:text-black cursor-pointer'>About</li>
        </ul>
        <div className='hidden sm:flex'>
          <Button
            className='text-QMediumGray font-semibold'
            variant={'button'}
            size={'sm'}
          >
            Login
          </Button>
          <Button
            className=' text-QMediumGray border border-QMediumGray hover:text-black hover:border-black'
            variant={'button'}
            size={'sm'}
          >
            Register
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
