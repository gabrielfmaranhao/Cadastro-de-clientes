import { IButtonIconProps } from "../../interfaces"
import { Button } from "./style"
const ButtonIcon = ({children, right, top, ...rest}:IButtonIconProps) => {
    return(
        <Button right={right} top={top} {...rest}>
            {children}
        </Button>
    )
}
export default ButtonIcon