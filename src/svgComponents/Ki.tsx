import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKi = ({
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
    <path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#D80027" />
    <path
      d="m32.348 22.32-3.411 1.604 1.816 3.304-3.704-.709-.47 3.742L24 27.509l-2.58 2.752-.47-3.742-3.703.709 1.816-3.304-3.41-1.604 3.41-1.605-1.816-3.303 3.704.708.47-3.741L24 17.13l2.58-2.752.47 3.741 3.703-.708-1.816 3.303 3.41 1.605ZM30.261 7.826h-4.696a1.565 1.565 0 0 0-3.13 0h-4.696c0 .864.753 1.565 1.618 1.565h-.053c0 .865.701 1.566 1.566 1.566 0 .864.7 1.565 1.565 1.565h3.13c.865 0 1.566-.701 1.566-1.565.864 0 1.565-.701 1.565-1.566h-.052c.864 0 1.617-.7 1.617-1.565Z"
      fill="#FFDA44"
    />
    <path
      d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24h48Z"
      fill="#F0F0F0"
    />
    <path
      d="M24.001 48c7.502 0 14.2-3.443 18.6-8.834-.791-.54-1.219-1.412-2.6-1.412-2 0-2 1.829-4 1.829s-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829c-1.382 0-1.81.872-2.6 1.412C9.8 44.557 16.499 48 24 48ZM44 27.06c-2 0-2-1.828-4-1.828s-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829c-1.999 0-1.999-1.829-3.999-1.829s-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829C2.01 27.06 2 25.252.032 25.233c.056 1.098.187 2.176.385 3.23C2.01 28.697 2.15 30.26 4 30.26c2 0 2-1.829 4-1.829s2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829c1.85 0 1.99-1.564 3.584-1.798a24.05 24.05 0 0 0 .385-3.23c-1.968.02-1.98 1.828-3.97 1.828ZM40 31.493c-2 0-2 1.829-4 1.829s-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829c-1.43 0-1.837-.934-2.683-1.467a23.876 23.876 0 0 0 2.178 4.623c.153.028.32.044.505.044 2 0 2-1.829 4-1.829s2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829c.184 0 .351-.016.505-.044a23.894 23.894 0 0 0 2.178-4.623c-.846.533-1.254 1.467-2.683 1.467-2 0-2-1.829-4-1.829Z"
      fill="#0052B4"
    />
    <path
      d="M47.926 22.104C46 22.149 45.974 23.93 44 23.93c-2 0-2-1.828-4-1.828s-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828c-1.974 0-2.001-1.78-3.926-1.826a24.355 24.355 0 0 0-.038 3.199C1.999 25.325 2.012 27.13 4 27.13c2 0 2-1.828 4-1.828s2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828c1.988 0 2-1.805 3.965-1.827a24.465 24.465 0 0 0-.04-3.2Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgKi;