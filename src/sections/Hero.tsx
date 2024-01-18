import {
  DesktopImg,
  MobileImg,
  Client1,
  Client2,
  Client3,
  Client4,
} from '../../public/images/index'

import { Button } from '../components/ui/button'

const Hero = () => {
  return (
    <div className='bg-QAlmostWhite min-h-screen text-lg'>
      {/* <NavBar/> */}
      <div className='flex flex-col-reverse sm:flex-row max-w-screen-lg mx-auto sm:gap-11 sm:px-2'>
        <div className=' px-5 sm:px-0 text-center sm:text-left  flex flex-col'>
          <div className='my-auto flex flex-col gap-10'>
            <h1 className='text-4xl font-bold sm:text-7xl mt-10 sm:mt-0'>
              Make <br className='hidden sm:block' /> remote work
            </h1>
            <p className='text-QMediumGray sm:mr-14 font-medium'>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div>
              <Button className=' hover:bg-white hover:text-black border-black border rounded-xl p-6 font-bold text-lg mb-10 sm:mb-0 '>
                Learn more
              </Button>
            </div>
          </div>

          <div className='flex items-center justify-between sm:w-[80%]'>
            <img className='w-20 ' src={Client1} alt='clients' />
            <img className='w-14 ' src={Client2} alt='clients' />
            <img className='w-20' src={Client3} alt='clients' />
            <img className='w-20 ' src={Client4} alt='clients' />
          </div>
        </div>
        <div className=''>
          <img className='hidden sm:block' src={DesktopImg} alt='home img' />
          <img className='sm:hidden' src={MobileImg} alt='home img' />
        </div>
      </div>
    </div>
  )
}

export default Hero
