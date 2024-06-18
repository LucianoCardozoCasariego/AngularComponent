import { Icons } from '../../interfaces/Icons.interface';

export const arrow_lower = (props: Icons) => {
  return `
    <svg
      viewBox="0 2 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class='${props.className}'
      ${props.width && 'width=' + props.width}
      ${props.height && 'height=' + props.height}
    >
      <path
        d="M6.53033 13.2877C6.23744 13.5805 5.76256 13.5805 5.46967 13.2877L0.696699 8.51468C0.403806 8.22179 0.403806 7.74692 0.696699 7.45402C0.989593 7.16113 1.46447 7.16113 1.75736 7.45402L6 11.6967L10.2426 7.45402C10.5355 7.16113 11.0104 7.16113 11.3033 7.45402C11.5962 7.74692 11.5962 8.22179 11.3033 8.51468L6.53033 13.2877ZM6.75 0.757324V12.7573H5.25V0.757324H6.75Z"
        fill="#797979"
      />
    </svg>
  `;
};
