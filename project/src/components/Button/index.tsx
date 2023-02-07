import { ButtonStyled } from "./style"
import { IButtonProps } from "../../interfaces"



const Button = ({background, color, height, width, title, ...rest}:IButtonProps) => {
    return (
    <ButtonStyled background={background} color={color} height={height} width={width} {...rest}>
        {title}
    </ButtonStyled>
    )
}
export default Button