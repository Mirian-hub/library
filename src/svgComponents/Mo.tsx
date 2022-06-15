import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMo = ({
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
    <path
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#496E2D"
    />
    <path
      d="M28.174 23c-.59 0-1.149.117-1.668.304.285-.634.475-1.34.475-2.094 0-2.98-2.981-5.217-2.981-5.217s-2.981 2.236-2.981 5.217c0 .754.19 1.46.475 2.094a4.92 4.92 0 0 0-1.668-.305c-2.981 0-5.217 2.982-5.217 2.982s2.236 2.981 5.217 2.981c1.748 0 3.239-1.024 4.174-1.873.935.848 2.426 1.873 4.174 1.873 2.981 0 5.217-2.982 5.217-2.982S31.155 23 28.174 23Z"
      fill="#F0F0F0"
    />
    <path
      d="m24 9.391.616 1.896h1.993l-1.612 1.171.615 1.895L24 13.182l-1.612 1.171.615-1.895-1.612-1.171h1.993L24 9.39ZM16.421 12.706l1.185 1.067 1.38-.797-.648 1.456 1.185 1.067-1.585-.167-.649 1.457-.331-1.56-1.586-.166 1.38-.797-.33-1.56ZM10.874 18.254l1.56.331.797-1.38.167 1.585 1.559.332-1.457.648.167 1.585-1.067-1.184-1.456.648.797-1.38-1.067-1.185ZM31.578 12.706l-1.185 1.067-1.38-.797.648 1.456-1.185 1.067 1.586-.167.648 1.457.332-1.56 1.585-.166-1.38-.797.331-1.56ZM37.125 18.254l-1.56.331-.797-1.38-.166 1.585-1.56.332 1.456.648-.166 1.585 1.067-1.184 1.456.648-.797-1.38 1.067-1.185Z"
      fill="#FFDA44"
    />
    <path
      d="M24 37.31c2.369 0 4.552-.79 6.303-2.12H17.698A10.386 10.386 0 0 0 24 37.31ZM14.435 31.049c.33.758.75 1.468 1.244 2.12h16.642c.494-.652.914-1.362 1.245-2.12H14.435Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgMo;
