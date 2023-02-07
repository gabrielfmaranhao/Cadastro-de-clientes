import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
    :root {
        --green-1: #1b83fe;
        --white-0: #ffffff;
        --white-1: #DCEDF9;
        --black-0: #000000;
        --blue-0:  #344055;
        --blue-2:  #5E6F88;
        --gray-0:  #B6B8C3;
        --gray-1:  #6F7D97;
        --red-0:   #f25541;
    }
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, label {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html, body, #root {
    width: 100%;
    height: 100%;
    background: var(--white-1);
    font-family: 'Inter';
}

`
export default Global