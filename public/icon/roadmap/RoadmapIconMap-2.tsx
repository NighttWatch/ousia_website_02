import * as React from "react"
import { SVGProps } from "react"


export default (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
        enableBackground: "new 0 0 100 100",
        }}
        viewBox="0 0 100 125"
        {...props}
    >
        <path d="M94.5 30.5c-.3-.3-.7-.5-1.1-.5H75.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.3l-32 32-23.5-23.3c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6L5.6 66.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l23.5-23.5 23.5 23.5c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l33.7-33.7v13.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V31.7c.1-.5-.1-.9-.4-1.2z" />
    </svg>
)
