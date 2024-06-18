import { Icons } from '../../interfaces/Icons.interface';

export const arrow_medium = (props: Icons) => {
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
        d="M9.99309 0.757395C9.99309 0.343181 9.65731 0.0073947 9.24309 0.00739485L2.49309 0.00739443C2.07888 0.00739443 1.74309 0.343181 1.74309 0.757395C1.74309 1.17161 2.07888 1.50739 2.49309 1.50739H8.49309V7.50739C8.49309 7.92161 8.82888 8.25739 9.24309 8.25739C9.65731 8.25739 9.99309 7.92161 9.99309 7.50739L9.99309 0.757395ZM1.28814 9.77301L9.77342 1.28772L8.71276 0.227064L0.227482 8.71235L1.28814 9.77301Z"
        fill="#FF932F"
      />
    </svg>
  `;
};
