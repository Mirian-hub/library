import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMq = ({
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
      fill="#F0F0F0"
    />
    <path
      d="M47.795 20.87A23.893 23.893 0 0 0 40.97 7.03 23.893 23.893 0 0 0 27.13.205v20.663h20.664ZM20.87.206A23.893 23.893 0 0 0 7.03 7.029 23.894 23.894 0 0 0 .208 20.87h20.664V.207ZM.207 27.13a23.893 23.893 0 0 0 6.824 13.84 23.895 23.895 0 0 0 13.84 6.825V27.13H.207ZM27.132 47.794a23.892 23.892 0 0 0 13.84-6.823 23.892 23.892 0 0 0 6.823-13.84H27.132v20.663Z"
      fill="#0052B4"
    />
    <path
      d="M32.192 15.229c0-.32.26-.579.579-.579h1.24a3.558 3.558 0 0 0 3.554-3.554 3.558 3.558 0 0 0-3.554-3.554h-1.178a2.449 2.449 0 0 0-1.468-.467c-1.186 0-2.148.77-2.148 1.718 0 .94.943 1.703 2.114 1.717v.007h2.68a.58.58 0 0 1 0 1.157h-1.24a3.558 3.558 0 0 0-3.554 3.554 3.558 3.558 0 0 0 3.554 3.554h4.794v-2.975H32.77a.579.579 0 0 1-.579-.578ZM13.411 15.229c0-.32.26-.579.579-.579h1.24a3.558 3.558 0 0 0 3.554-3.554 3.558 3.558 0 0 0-3.554-3.554h-1.178a2.45 2.45 0 0 0-1.468-.467c-1.186 0-2.148.77-2.148 1.718 0 .94.943 1.703 2.114 1.717v.007h2.68a.58.58 0 0 1 0 1.157h-1.24a3.558 3.558 0 0 0-3.554 3.554 3.558 3.558 0 0 0 3.554 3.554h4.794v-2.975H13.99a.579.579 0 0 1-.579-.578ZM32.191 37.37c0-.319.26-.578.58-.578h1.239a3.558 3.558 0 0 0 3.554-3.554 3.558 3.558 0 0 0-3.554-3.554h-1.177a2.449 2.449 0 0 0-1.469-.467c-1.186 0-2.148.77-2.148 1.719 0 .94.943 1.702 2.114 1.717v.006h2.68a.58.58 0 0 1 0 1.157h-1.24a3.558 3.558 0 0 0-3.554 3.554 3.558 3.558 0 0 0 3.554 3.555h4.794v-2.976H32.77a.579.579 0 0 1-.579-.578ZM13.41 37.37c0-.319.26-.578.58-.578h1.239a3.558 3.558 0 0 0 3.554-3.554 3.558 3.558 0 0 0-3.554-3.554h-1.177a2.449 2.449 0 0 0-1.469-.467c-1.186 0-2.148.77-2.148 1.719 0 .94.943 1.702 2.114 1.717v.006h2.68a.58.58 0 0 1 0 1.157h-1.24a3.558 3.558 0 0 0-3.554 3.554 3.558 3.558 0 0 0 3.554 3.555h4.794v-2.976h-4.794a.579.579 0 0 1-.579-.578Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgMq;