import { Icons } from '../../interfaces/Icons.interface';

export const arrow_low = (props: Icons) => {
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
        d="M9.99309 9.24261C9.99309 9.65682 9.65731 9.99261 9.24309 9.99261L2.49309 9.99261C2.07888 9.99261 1.74309 9.65682 1.74309 9.24261C1.74309 8.82839 2.07888 8.49261 2.49309 8.49261H8.49309V2.49261C8.49309 2.07839 8.82888 1.74261 9.24309 1.74261C9.65731 1.74261 9.99309 2.07839 9.99309 2.49261L9.99309 9.24261ZM1.28814 0.226994L9.77342 8.71228L8.71276 9.77294L0.227482 1.28765L1.28814 0.226994Z"
        fill="#7CC209"
      />
    </svg>
  `;
};
