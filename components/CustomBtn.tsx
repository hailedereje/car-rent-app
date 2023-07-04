'use client'
import { CustomBtnProps } from '@/types'


const CustomBtn = ({ title, customStyle,btnType, handleClick }: CustomBtnProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${customStyle}`}
            onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomBtn