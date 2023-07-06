"use client"
import { CarCardProps, CarProps } from "@/types"
import { calculateCarRent } from "@/utils"
import Image from 'next/image'
import CustomBtn from "./CustomBtn"
import { useState } from "react"

const CarCard = ({car}:CarCardProps) => {

  const {city_mpg,make,drive,model,transmission,year} = car
  const carRent = calculateCarRent(city_mpg,year)

  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
       
        
      </div> 
      <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">$</span>
            {carRent}
            <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <div className="relative w-full h-40 object-contain">
          <Image src={'/hero.png'} alt="car" fill priority className="object-contain"/>
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray-500">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={'/steering-wheel.svg'} width={20} height={20} alt="steering-wheel"/>
              <p className="text-[14px]">
                {transmission === 'a' ? 'Automatic':'Manual'}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={'/tire.svg'} width={20} height={20} alt="steering-wheel"/>
              <p className="text-[14px]">{drive.toUpperCase()}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Image src={'/gas.svg'} width={20} height={20} alt="steering-wheel"/>
              <p className="text-[14px]">{city_mpg} MPG</p>    
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomBtn
              title="View More"
              customStyle="w-full py-[16px] rounded-full bg-primary-blue"
              textStyle='text-white text-[14px] leading-[17px] font-bold'
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
              />
          </div>
        </div>
    </div>
  )
}

export default CarCard