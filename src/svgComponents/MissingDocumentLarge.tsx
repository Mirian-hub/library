import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMissingDocumentLarge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 150 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m95.148 91.574-64.84 16.698a8.575 8.575 0 0 1-10.43-6.158L.268 25.964a8.574 8.574 0 0 1 6.158-10.43L66.75 0l15.44 6.912 19.116 74.233a8.574 8.574 0 0 1-6.158 10.43Z"
      fill="#F0F0F0"
    />
    <path
      d="M7.041 17.922a6.105 6.105 0 0 0-4.385 7.427l19.61 76.15a6.106 6.106 0 0 0 7.427 4.385l64.84-16.697a6.105 6.105 0 0 0 4.386-7.427L80.099 8.677l-13.57-6.074L7.042 17.922Z"
      fill="#fff"
    />
    <path
      d="M82.025 7.305 71.99 9.89a2.852 2.852 0 0 1-3.473-2.05L66.608.427a.178.178 0 0 1 .245-.208l15.2 6.75a.178.178 0 0 1-.028.336Z"
      fill="#F0F0F0"
    />
    <path
      d="m76.746 72.336-29.521 7.602a1.425 1.425 0 1 1-.711-2.763l29.52-7.602a1.425 1.425 0 1 1 .712 2.763ZM83.644 75.53l-35.219 9.069a1.426 1.426 0 0 1-.71-2.763l35.217-9.069a1.426 1.426 0 0 1 .712 2.763ZM35.176 89.094a5.04 5.04 0 1 0 0-10.081 5.04 5.04 0 0 0 0 10.081Z"
      fill="#E6E6E6"
    />
    <path
      d="M73.607 59.144 34.4 69.236a4.417 4.417 0 0 1-5.372-3.172l-8.216-31.919a4.416 4.416 0 0 1 3.172-5.372L63.191 18.68a4.417 4.417 0 0 1 5.373 3.173l8.216 31.919a4.416 4.416 0 0 1-3.173 5.372Z"
      fill="#fff"
    />
    <path
      d="M73.607 59.144 34.4 69.236a4.417 4.417 0 0 1-5.372-3.172l-8.216-31.919a4.416 4.416 0 0 1 3.172-5.372L63.191 18.68a4.417 4.417 0 0 1 5.373 3.173l8.216 31.919a4.416 4.416 0 0 1-3.173 5.372ZM24.114 29.275a3.897 3.897 0 0 0-2.8 4.74l8.217 31.92a3.897 3.897 0 0 0 4.74 2.799L73.478 58.64a3.897 3.897 0 0 0 2.8-4.74L68.06 21.982a3.897 3.897 0 0 0-4.74-2.8L24.114 29.276Z"
      fill="#E6E6E6"
    />
    <path
      d="m61.202 29.413-19.787 5.093a.709.709 0 0 1-.859-.446.683.683 0 0 1 .481-.866l20.142-5.185c.814.412.6 1.255.023 1.404ZM62.096 32.883l-19.787 5.094a.709.709 0 0 1-.86-.446.68.68 0 0 1 .482-.867l20.142-5.184c.814.412.6 1.255.023 1.403Z"
      fill="#F0F0F0"
    />
    <path
      d="m38.54 41.054-6.04 1.554a.769.769 0 0 1-.934-.552L29.73 34.93a.77.77 0 0 1 .552-.935l6.04-1.555a.77.77 0 0 1 .934.552l1.835 7.127a.768.768 0 0 1-.552.935Z"
      fill="#E6E6E6"
    />
    <path
      d="m63.867 40.005-30.199 7.773a.709.709 0 0 1-.858-.446.683.683 0 0 1 .48-.866L63.846 38.6c.813.412.6 1.255.022 1.404ZM64.761 43.476 34.562 51.25a.709.709 0 0 1-.858-.446.683.683 0 0 1 .48-.867l30.555-7.865c.813.412.6 1.256.022 1.404ZM65.654 46.946 35.455 54.72a.709.709 0 0 1-.858-.446.683.683 0 0 1 .48-.867l30.555-7.865c.813.412.6 1.255.022 1.404ZM66.548 50.418l-30.2 7.773a.709.709 0 0 1-.858-.446.683.683 0 0 1 .481-.866l30.554-7.865c.814.412.6 1.255.023 1.404ZM67.441 53.887l-30.199 7.774a.709.709 0 0 1-.858-.446.68.68 0 0 1 .48-.867l30.554-7.865c.814.413.6 1.256.023 1.404Z"
      fill="#F0F0F0"
    />
    <path
      d="M35.548 85.82a.524.524 0 0 1-.33-.023l-.007-.002-1.373-.583a.525.525 0 1 1 .412-.969l.89.379 1.166-2.743a.527.527 0 0 1 .69-.278l-.007.018.007-.018a.527.527 0 0 1 .279.69l-1.372 3.225a.527.527 0 0 1-.355.303v.001Z"
      fill="#fff"
    />
    <path
      d="M120.019 120.593H53.062a8.574 8.574 0 0 1-8.564-8.564V33.394a8.574 8.574 0 0 1 8.565-8.564h62.291l13.229 10.544v76.655a8.575 8.575 0 0 1-8.564 8.564Z"
      fill="#E6E6E6"
    />
    <path
      d="M53.062 27.296a6.105 6.105 0 0 0-6.098 6.099v78.634a6.108 6.108 0 0 0 6.098 6.099h66.957a6.106 6.106 0 0 0 6.098-6.099V36.562l-11.625-9.266h-61.43Z"
      fill="#fff"
    />
    <path
      d="M106.996 50.16H76.511a1.426 1.426 0 1 1 0-2.851h30.485a1.425 1.425 0 0 1 1.008 2.434c-.267.268-.63.418-1.008.418ZM112.879 54.973H76.511a1.426 1.426 0 0 1 0-2.852h36.368a1.423 1.423 0 0 1 1.428 1.426 1.423 1.423 0 0 1-.882 1.318 1.423 1.423 0 0 1-.546.108Z"
      fill="#625AC4"
    />
    <path
      d="M106.996 68.878H76.513a1.426 1.426 0 0 0 0 2.852h30.483a1.425 1.425 0 1 0 0-2.852ZM112.879 73.692H76.512a1.426 1.426 0 1 0 0 2.853h36.367a1.425 1.425 0 0 0 1.008-2.435 1.425 1.425 0 0 0-1.008-.418ZM106.996 93.302H76.511a1.426 1.426 0 1 1 0-2.853h30.485a1.425 1.425 0 1 1 0 2.853ZM112.879 98.116H76.511a1.426 1.426 0 0 1 0-2.852h36.368a1.423 1.423 0 0 1 1.428 1.426 1.423 1.423 0 0 1-.882 1.318 1.423 1.423 0 0 1-.546.108Z"
      fill="#C2C2C2"
    />
    <path
      d="M63.817 56.182a5.04 5.04 0 1 0 0-10.081 5.04 5.04 0 0 0 0 10.081Z"
      fill="#625AC4"
    />
    <path
      d="M63.318 53.064a.522.522 0 0 1-.315-.104l-.006-.005-1.184-.906a.525.525 0 0 1 .056-.874.526.526 0 0 1 .584.039l.768.588 1.813-2.365a.526.526 0 0 1 .738-.098l-.012.016.012-.016a.527.527 0 0 1 .097.738l-2.132 2.781a.525.525 0 0 1-.419.206Z"
      fill="#fff"
    />
    <path
      d="M69.376 72.71a5.04 5.04 0 0 1-5.04 5.043c-.043.001-.087 0-.13-.005a5.04 5.04 0 1 1 5.17-5.037ZM63.817 99.323a5.04 5.04 0 1 0 0-10.082 5.04 5.04 0 0 0 0 10.082ZM128.325 35.713h-10.362a2.852 2.852 0 0 1-2.852-2.852v-7.653a.177.177 0 0 1 .197-.178.18.18 0 0 1 .092.038l13.036 10.327c.029.023.05.055.061.09a.178.178 0 0 1-.172.228Z"
      fill="#C2C2C2"
    />
    <path
      d="M69.376 72.711a5.042 5.042 0 0 1-5.04 5.043c-.043 0-.087-.001-.13-.006a10.913 10.913 0 0 1 .978-10.007 5.043 5.043 0 0 1 4.192 4.97ZM75.085 70.305a1.43 1.43 0 0 1 1.428-1.427h7.596c.443.902.759 1.862.937 2.852h-8.533a1.428 1.428 0 0 1-1.428-1.425ZM85.222 73.692c0 .964-.127 1.923-.379 2.853h-8.33a1.426 1.426 0 1 1 0-2.853h8.709Z"
      fill="#625AC4"
    />
    <path
      d="M104.017 91.282a1.556 1.556 0 0 1-2.14.518L83.709 80.72a1.556 1.556 0 1 1 1.622-2.66l18.168 11.082a1.558 1.558 0 0 1 .518 2.14Z"
      fill="#211C4E"
    />
    <path
      d="M85.85 80.2A12.457 12.457 0 1 1 81.7 63.08 12.47 12.47 0 0 1 85.85 80.2ZM67.238 68.85a9.343 9.343 0 1 0 12.84-3.111 9.353 9.353 0 0 0-12.84 3.11Z"
      fill="#211C4E"
    />
    <path
      d="M125.761 75.711a6.374 6.374 0 0 0 6.374-6.374 6.374 6.374 0 1 0-12.748 0 6.374 6.374 0 0 0 6.374 6.374ZM125.349 105.07a2.857 2.857 0 0 1 2.16-3.672c.125-.025.252-.04.379-.047l6.714-10.776-6.133-5.83a2.46 2.46 0 0 1-.761-1.724 2.446 2.446 0 0 1 3.363-2.32c.3.12.573.3.803.526l8.468 8.35.017.02a2.223 2.223 0 0 1-.154 2.644l-9.408 11.126a2.856 2.856 0 0 1-2.734 3.686 2.859 2.859 0 0 1-2.714-1.983ZM115.263 158.049h-3.182l-1.513-12.273 4.696.001-.001 12.272Z"
      fill="#A0616A"
    />
    <path
      d="M116.074 161.133h-10.259v-.13a4.001 4.001 0 0 1 1.17-2.824 3.983 3.983 0 0 1 2.824-1.169h6.266l-.001 4.123Z"
      fill="#211C4E"
    />
    <path
      d="m146.887 153.649-2.733 1.628-7.58-9.77 4.035-2.403 6.278 10.545Z"
      fill="#A0616A"
    />
    <path
      d="m149.162 155.884-8.815 5.249-.066-.112a4.003 4.003 0 0 1-.44-3.024c.129-.508.357-.986.67-1.407a4.01 4.01 0 0 1 1.158-1.043l5.384-3.205 2.109 3.542ZM110.167 152.643c-2.132-25.097-3.4-48.412 4.392-57.923l.06-.073 13.112 5.245.022.047c.044.096 4.405 9.688 3.388 16.14l3.234 14.878 10.546 17.658a1.169 1.169 0 0 1-.532 1.668l-4.583 2.017a1.177 1.177 0 0 1-1.466-.459l-11.472-18.706-6.48-14.348a.39.39 0 0 0-.741.119l-3.592 33.763a1.165 1.165 0 0 1-1.162 1.044h-3.562a1.17 1.17 0 0 1-1.164-1.07Z"
      fill="#211C4E"
    />
    <path
      d="m114.603 94.92-.063-.03-.009-.07c-.49-3.428.09-7.237 1.723-11.321a8.988 8.988 0 0 1 10.433-5.383 8.983 8.983 0 0 1 5.725 4.402 8.878 8.878 0 0 1 .616 7.117c-2.059 6.021-4.73 11.655-4.757 11.711l-.056.118-13.612-6.545Z"
      fill="#625AC4"
    />
    <path
      d="M100.297 86.38a2.847 2.847 0 0 1 2.263-.57 2.854 2.854 0 0 1 2.109 1.646l12.445 2.515 3.314-7.786a2.459 2.459 0 0 1 1.348-1.316 2.445 2.445 0 0 1 3.187 1.39 2.443 2.443 0 0 1-.048 1.883l-4.856 10.856-.013.023a2.22 2.22 0 0 1-2.53.782L103.8 90.887a2.787 2.787 0 0 1-1.354.563 2.858 2.858 0 0 1-3.057-1.834 2.864 2.864 0 0 1 .908-3.235Z"
      fill="#A0616A"
    />
    <path
      d="M148.788 76.163c-.614-1.088-1.508-2.084-2.691-2.486-1.527-.52-3.181.033-4.751.402-1.21.285-2.474.459-3.693.219-1.219-.24-2.396-.95-2.95-2.062-.816-1.636-.129-3.586-.179-5.414a6.575 6.575 0 0 0-8.284-6.18c-1.504-.433-2.865-.473-3.795.683a4.414 4.414 0 0 0-4.412 4.411h4.219a4.192 4.192 0 0 0 .636 3.097c.745 1.094 2.04 1.885 2.289 3.185.242 1.26-.614 2.455-1.512 3.37-.898.916-1.94 1.823-2.221 3.075-.172.95.024 1.93.546 2.742a8.932 8.932 0 0 0 1.917 2.11 28.132 28.132 0 0 0 11.688 5.98c3.038.732 6.36.921 9.18-.424a9.113 9.113 0 0 0 5.141-9.173 9.127 9.127 0 0 0-1.128-3.535Z"
      fill="#211C4E"
    />
    <path
      d="M149.741 161.403h-49.309a.26.26 0 1 1 0-.519h49.309a.259.259 0 0 1 0 .519Z"
      fill="#E6E6E6"
    />
  </svg>
);

export default SvgMissingDocumentLarge;
