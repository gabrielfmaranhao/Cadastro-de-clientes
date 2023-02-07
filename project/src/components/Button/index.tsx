import { ButtonStyled, IButtonStyles } from "./style"


interface IButtonProps extends IButtonStyles {
    title: string
}

const Button = ({background, color, height, width, title}:IButtonProps) => {
    return (
    <ButtonStyled background={background} color={color} height={height} width={width}>
        {title}
    </ButtonStyled>
    )
}
export default Button