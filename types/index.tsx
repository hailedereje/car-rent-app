import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title:string;
    customStyle?:string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}