import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title:string;
    customStyle?:string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    textStyle?:string;
    rightIcon?:string;
    isDisabled?: boolean;
}
export interface SearchManufacturer {
    manufacturer :string,
    setManufacturer:(manufacturer:string)=>void;
}

export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string
    year:number
}

export interface CarCardProps {
    car: CarProps;
  }

export interface CarDetailProps {
    isOpen : boolean;
    closeModal : ()=>void;
    car : CarProps;
}