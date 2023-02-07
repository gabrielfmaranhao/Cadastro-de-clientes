import { TextStyled } from "./styled"
import { ITextProps } from "../../interfaces"


const Text = ({description, size, weight, color, element, html} :ITextProps) => {
    return(
        <TextStyled as={element} size={size} color={color} weight={weight} htmlFor={html}>
            {description}
        </TextStyled>
    )
}
export default Text