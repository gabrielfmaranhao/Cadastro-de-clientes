import { ReactNode } from "react"
import { Button } from "./style"
interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    top: number
    right: number
}
const ButtonIcon = ({children, right, top, ...rest}:IButtonIconProps) => {
    return(
        <Button right={right} top={top} {...rest}>
            {children}
        </Button>
    )
}
export default ButtonIcon