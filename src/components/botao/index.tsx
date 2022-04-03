import React from "react";
import style from './Botao.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Botao({type, onClick, children} : Props){
    return (
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
    )
}