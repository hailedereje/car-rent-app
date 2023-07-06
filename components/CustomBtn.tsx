'use client'
import { CustomBtnProps } from '@/types'
import Image from 'next/image'


const CustomBtn = ({ title, customStyle,btnType, handleClick,textStyle,rightIcon,isDisabled }: CustomBtnProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${customStyle}`}
            onClick={handleClick}>
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt='right-icon' fill className='object-contain'/>
                </div>
            )}
        </button>
    )
}

export default CustomBtn