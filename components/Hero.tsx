"use client"
import CustomBtn from './CustomBtn'
import Image from 'next/image'
const Hero = () => {
    const handleScroll = () =>{}
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find , buy rent a car --quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Streamline your rental experiance with our effortless booking process!
            </p>
            <CustomBtn title={'Explor Now'} customStyle="bg-primary-blue text-white mt-10 rounded-full" handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src={'/hero.png'} alt='hero' fill className='object-contain'/>
            </div> 
            <div className="hero__image-overlay"/>
            
        </div>
    </div>
  )
}

export default Hero