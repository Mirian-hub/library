import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserSmall = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.807 7.047a4.19 4.19 0 0 0-1.169.687A3.61 3.61 0 0 0 3.43 9.792a4.707 4.707 0 0 0-.097.97c0 .674.128 1.253.403 1.733.277.481.676.813 1.137 1.036l.01.005C5.765 13.96 6.92 14 8 14c.135 0 .271 0 .408-.003.264-.003.529-.012.79-.03.147-.01.292-.023.435-.04.534-.063 1.043-.18 1.484-.39a2.565 2.565 0 0 0 1.147-1.042c.275-.48.403-1.059.403-1.733 0-1.308-.481-2.33-1.305-3.028a4.17 4.17 0 0 0-1.17-.687A2.997 2.997 0 0 0 11 5a3 3 0 1 0-5.193 2.047Zm4.605 1.634C9.84 8.24 9.004 8 8 8c-1.01 0-1.848.244-2.42.687-.547.424-.913 1.08-.913 2.075 0 .51.096.843.225 1.068a1.263 1.263 0 0 0 .567.504c.263.126.587.207.97.257.34.045.728.065 1.163.073.132.002.268.003.408.003 1.125 0 1.973-.061 2.54-.333l.048-.024a1.213 1.213 0 0 0 .567-.57c.104-.22.178-.532.178-.978 0-.996-.366-1.651-.913-2.075l-.008-.006ZM9.667 5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserSmall;
