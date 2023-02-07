import { ButtonHTMLAttributes } from "react"
import { ButtonStyled, IButtonStyles } from "./style"


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    background: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
    height: number
    width?: number
    color: "green-1" | "white-0" | "white-1" | "gray-0" | "black-0" | "blue-0" | "blue-2" | "gray-1" 
}

const Button = ({background, color, height, width, title, ...rest}:IButtonProps) => {
    return (
    <ButtonStyled background={background} color={color} height={height} width={width} {...rest}>
        {title}
    </ButtonStyled>
    )
}
export default Button