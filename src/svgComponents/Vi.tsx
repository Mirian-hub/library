import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVi = ({
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
      fill="#FCFCFC"
    />
    <path
      d="M28.077 16.767a4.076 4.076 0 0 0-8.152 0h-8.968c0 2.216 1.931 4.013 4.147 4.013h-.133a4.013 4.013 0 0 0 4.013 4.014 4.012 4.012 0 0 0 3.271 3.941l-.01.024h3.512l-.01-.024a4.012 4.012 0 0 0 3.27-3.941 4.013 4.013 0 0 0 4.014-4.014h-.134c2.216 0 4.147-1.797 4.147-4.013h-8.967Z"
      fill="#FFDA44"
    />
    <path
      d="m22.21 28.343-2.528 5.706c1.334.542 2.791.843 4.32.843a11.44 11.44 0 0 0 4.318-.843l-2.527-5.706H22.21Z"
      fill="#FFDA44"
    />
    <path
      d="M18.783 18.771v7.021c0 3.994 5.217 5.218 5.217 5.218s5.218-1.224 5.218-5.218v-7.02H18.783Z"
      fill="#F0F0F0"
    />
    <path
      d="m5.82 24.169 2.822 7.892 2.793-7.892h2.13l-4.07 10.435H7.79l-4.1-10.435h2.13ZM38.608 34.604V24.169h2.029v10.435h-2.029Z"
      fill="#338AF3"
    />
    <path
      d="M20.87 21.038v8.509a9.182 9.182 0 0 0 2.086 1.123v-9.632H20.87ZM27.13 21.038v8.509a9.184 9.184 0 0 1-2.087 1.123v-9.632h2.087Z"
      fill="#D80027"
    />
    <path d="M29.218 18.771H18.783v3.311h10.435v-3.31Z" fill="#0052B4" />
  </svg>
);

export default SvgVi;
