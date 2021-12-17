import { css } from "styled-components"


/* This is the media query that will be passed onto the components */
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 376px) {
        ${props}
    }`;
}