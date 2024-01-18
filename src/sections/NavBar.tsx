import { Button } from '@/components/ui/button'
import {
  IconCalendar,
  IconMenu,
  IconPlanning,
  IconReminders,
  IconTodo,
  Logo,
} from '../../public/images'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  function handleMenu() {
    setOpen(!open)
  }
  function handleMenu2() {
    setOpen2(!open2)
  }

  return (
    <header className='bg-QAlmostWhite'>
      <nav className='flex justify-between items-center py-5 px-2 max-w-screen-xl mx-auto '>
        <div className='mr-10 relative top-1'>
          <img src={Logo} alt='Logo' />
        </div>
        <ul className=' text-QMediumGray mr-auto hidden sm:flex gap-10 font-semibold'>
          <div onClick={handleMenu} className='flex relative'>
            <li className='hover:text-black cursor-pointer flex'>Features</li>
            <div
              className={`absolute top-9 right-3 bg-white w-36 text-center p-5  ${
                open ? 'flex flex-col' : 'hidden'
              }  gap-2 rounded-xl shadow-xl`}
            >
              <p className='flex items-center'>
                <img className='relative top-[-2px] mr-2' src={IconTodo} />
                <span>Todo List</span>
              </p>
              <p className='flex items-center'>
                <img className='relative top-[-2px] mr-2' src={IconCalendar} />
                <span>Calendar</span>
              </p>
              <p className='flex items-center '>
                <img className='relative top-[-2px] mr-2' src={IconReminders} />
                <span>Reminders</span>
              </p>
              <p className='flex items-center '>
                <img className='relative top-[-2px] mr-2' src={IconPlanning} />
                <span>Planning</span>
              </p>
            </div>
            <ChevronDown
              className={`${
                open
                  ? 'rotate-180 transition-all duration-300 '
                  : 'transition-all duration-300 '
              }`}
            />
          </div>
          <div onClick={handleMenu2} className='flex relative'>
            <li className='hover:text-black cursor-pointer flex'>Company</li>
            <div
              className={`absolute top-9 right-3 bg-white w-32 text-left p-5 flex flex-col gap-2 rounded-xl shadow-xl ${
                open2 ? 'flex flex-col' : 'hidden'
              } cursor-pointer `}
            >
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>
            <ChevronDown
              className={`${
                open2
                  ? 'rotate-180 transition-all duration-300 '
                  : 'transition-all duration-300 '
              } cursor-pointer`}
            />
          </div>
          <li className='hover:text-black cursor-pointer flex'>Careers</li>
          <li className='hover:text-black cursor-pointer flex'>About</li>
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
        <Sheet>
          <SheetTrigger className='sm:hidden'>
            <img src={IconMenu} />
          </SheetTrigger>
          <SheetContent>
            <div className='flex flex-col font-medium mt-11 gap-3'>
              <div onClick={handleMenu}>
                <p className='cursor-pointer flex items-center gap-1'>
                  Features
                  <span>
                    <ChevronDown
                      className={`${
                        open
                          ? '-rotate-180 transition-all duration-300 '
                          : 'transition-all duration-300 '
                      } w-4`}
                    />
                  </span>
                </p>
                <div
                  className={`mt-3 ml-7  space-y-3 relative ${
                    open ? 'block ' : ' hidden '
                  } `}
                >
                  <p className='flex items-center space-x-3'>
                    <img src={IconTodo} className='relative top-[-3px]' />
                    <span>Todo List</span>
                  </p>
                  <p className='flex items-center space-x-3'>
                    <img src={IconCalendar} className='relative top-[-3px]' />
                    <span>Calendar</span>
                  </p>
                  <p className='flex items-center space-x-3'>
                    <img src={IconReminders} className='relative top-[-3px]' />
                    <span>Reminers</span>
                  </p>
                  <p className='flex items-center space-x-3'>
                    <img src={IconPlanning} className='relative top-[-3px]' />
                    <span>Planning</span>
                  </p>
                </div>
              </div>
              <div onClick={handleMenu2}>
                <p className='cursor-pointer flex items-center gap-1'>
                  Company
                  <span>
                    <ChevronDown
                      className={`${
                        open2
                          ? '-rotate-180 transition-all duration-300 '
                          : 'transition-all duration-300 '
                      } w-4`}
                    />
                  </span>
                </p>
                <div
                  className={`mt-3 ml-7  space-y-3 relative ${
                    open2 ? 'block ' : ' hidden '
                  } `}
                >
                  <p className='flex items-center space-x-3'>
                    <span>History</span>
                  </p>
                  <p className='flex items-center space-x-3'>
                    <span>Our Team</span>
                  </p>
                  <p className='flex items-center space-x-3'>
                    <span>Blog</span>
                  </p>
                </div>
              </div>
              <p className='cursor-pointer'>Careers</p>
              <p className='cursor-pointer'>About</p>
              <div className='flex flex-col'>
                <Button
                  className='text-QMediumGray font-semibold'
                  variant={'button'}
                  size={'lg'}
                >
                  Login
                </Button>
                <Button
                  className=' text-QMediumGray border border-QMediumGray hover:text-black hover:border-black rounded-2xl'
                  variant={'button'}
                  size={'lg'}
                >
                  Register
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default NavBar
