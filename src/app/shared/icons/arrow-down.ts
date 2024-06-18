import { Icons } from '../../interfaces/Icons.interface';

export const arrow_down = (props: Icons) => {
  return `
    <svg
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class='${props.className}'
      ${props.width && 'width=' + props.width}
      ${props.height && 'height=' + props.height}
    >
      <path
        d="M3.53542 4.125L7.07083 0.589582L6.48167 -9.53674e-07L3.53542 2.94667L0.589167 -9.53674e-07L0 0.589582L3.53542 4.125Z"
        fill="${props.color ? props.color : '#010318'}"
      />
    </svg>
    `;
};
