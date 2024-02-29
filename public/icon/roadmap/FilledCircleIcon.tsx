import * as React from "react"
import { SVGProps } from "react"


export default (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1280" {...props}>
        <title>{"circle"}</title>
        <path d="M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z" />
        <text
        y={1039}
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fontSize={5}
        fontWeight="bold"
        >
        {"Created by scott desmond"}
        </text>
        <text
        y={1044}
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fontSize={5}
        fontWeight="bold"
        >
        {"from the Noun Project"}
        </text>
    </svg>
)