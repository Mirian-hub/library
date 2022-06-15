import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIr = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#IR_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M31.796 17.739h-3.14c.025.345.04.693.04 1.043 0 2.322-.58 4.572-1.592 6.174-.312.494-.836 1.192-1.538 1.663v-8.88h-3.13v8.88c-.703-.471-1.227-1.169-1.54-1.663-1.011-1.602-1.591-3.852-1.591-6.174 0-.35.015-.698.04-1.043h-3.14c-.02.343-.03.691-.03 1.043 0 6.437 3.437 11.479 7.825 11.479 4.389 0 7.826-5.042 7.826-11.479 0-.352-.01-.7-.03-1.043Z"
        fill="#D80027"
      />
      <path
        d="M9.913 11.478h3.13v2.087h3.13v-2.087h3.13v2.087h3.131v-2.087h3.13v2.087h3.131v-2.087h3.13v2.087h3.13v-2.087h3.131v2.087h7.532C41.736 5.537 33.515 0 24 0 14.485 0 6.263 5.537 2.38 13.565h7.532v-2.087Z"
        fill="#6DA544"
      />
      <path
        d="M38.087 34.435v2.087h-3.13v-2.087h-3.131v2.087h-3.13v-2.087h-3.131v2.087h-3.13v-2.087h-3.13v2.087h-3.131v-2.087h-3.13v2.087H9.912v-2.087H2.38C6.263 42.463 14.485 48 24 48s17.736-5.537 21.618-13.565h-7.531Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="IR_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIr;
