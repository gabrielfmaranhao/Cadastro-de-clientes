import { ITextStylesProps, TextStyled } from "./styled"

export interface ITextProps extends ITextStylesProps {
    description?: string
    element: "h1" | "h2" | "h3" | "p" | "label" | "span"
    html?: string
}

const Text = ({description, size, weight, color, element, html} :ITextProps) => {
    return(
        <TextStyled as={element} size={size} color={color} weight={weight} htmlFor={html}>
            {description}
        </TextStyled>
    )
}
export default Text