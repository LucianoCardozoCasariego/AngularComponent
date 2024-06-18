import { Icons } from '../../interfaces/Icons.interface';

export const arrow_high = (props: Icons) => {
  return `
    <svg
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class='${props.className}'
      ${props.width && 'width=' + props.width}
      ${props.height && 'height=' + props.height}
    >
      <path
        d="M6.53033 0.226995C6.23744 -0.0658989 5.76256 -0.0658989 5.46967 0.226994L0.696699 4.99996C0.403806 5.29286 0.403806 5.76773 0.696699 6.06062C0.989593 6.35352 1.46447 6.35352 1.75736 6.06062L6 1.81798L10.2426 6.06063C10.5355 6.35352 11.0104 6.35352 11.3033 6.06063C11.5962 5.76773 11.5962 5.29286 11.3033 4.99996L6.53033 0.226995ZM6.75 12.7573L6.75 0.757324L5.25 0.757324L5.25 12.7573L6.75 12.7573Z"
        fill="#F10101"
      />
    </svg>
  `;
};
