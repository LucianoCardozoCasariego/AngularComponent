import { Icons } from '../../interfaces/Icons.interface';

export const metricas = (props: Icons) => {
  return `
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class='${props.className}'
      ${props.width && 'width=' + props.width}
      ${props.height && 'height=' + props.height}
    >
      <g clip-path="url(#clip0_17128_3286)">
        <path
          d="M10.2857 2.14286C10.2857 1.57454 10.0599 1.02949 9.65809 0.627628C9.25622 0.225765 8.71118 0 8.14286 0H2.14286C1.57454 0 1.02949 0.225765 0.627628 0.627628C0.225765 1.02949 0 1.57454 0 2.14286V8.14286C0 8.71118 0.225765 9.25622 0.627628 9.65809C1.02949 10.0599 1.57454 10.2857 2.14286 10.2857H4.28571V9.42857H2.14286C1.80186 9.42857 1.47484 9.29311 1.23372 9.05199C0.992602 8.81088 0.857143 8.48385 0.857143 8.14286V3.42857H9.42857V3.65829C9.68917 3.80874 9.90557 4.02514 10.056 4.28574C10.2065 4.54633 10.2857 4.84194 10.2857 5.14286V2.14286ZM2.14286 0.857143H8.14286C8.48385 0.857143 8.81088 0.992602 9.05199 1.23372C9.29311 1.47484 9.42857 1.80186 9.42857 2.14286V2.57143H0.857143V2.14286C0.857143 1.80186 0.992602 1.47484 1.23372 1.23372C1.47484 0.992602 1.80186 0.857143 2.14286 0.857143ZM8.57143 4.28571C8.3441 4.28571 8.12608 4.37602 7.96534 4.53677C7.80459 4.69751 7.71429 4.91553 7.71429 5.14286V11.1429C7.71429 11.3702 7.80459 11.5882 7.96534 11.7489C8.12608 11.9097 8.3441 12 8.57143 12C8.79876 12 9.01677 11.9097 9.17752 11.7489C9.33827 11.5882 9.42857 11.3702 9.42857 11.1429V5.14286C9.42857 4.91553 9.33827 4.69751 9.17752 4.53677C9.01677 4.37602 8.79876 4.28571 8.57143 4.28571ZM6 7.71429C5.77267 7.71429 5.55465 7.80459 5.39391 7.96534C5.23316 8.12608 5.14286 8.3441 5.14286 8.57143V11.1429C5.14286 11.3702 5.23316 11.5882 5.39391 11.7489C5.55465 11.9097 5.77267 12 6 12C6.22733 12 6.44535 11.9097 6.60609 11.7489C6.76684 11.5882 6.85714 11.3702 6.85714 11.1429V8.57143C6.85714 8.3441 6.76684 8.12608 6.60609 7.96534C6.44535 7.80459 6.22733 7.71429 6 7.71429ZM10.2857 6.85714C10.2857 6.62981 10.376 6.4118 10.5368 6.25105C10.6975 6.09031 10.9155 6 11.1429 6C11.3702 6 11.5882 6.09031 11.7489 6.25105C11.9097 6.4118 12 6.62981 12 6.85714V11.1429C12 11.3702 11.9097 11.5882 11.7489 11.7489C11.5882 11.9097 11.3702 12 11.1429 12C10.9155 12 10.6975 11.9097 10.5368 11.7489C10.376 11.5882 10.2857 11.3702 10.2857 11.1429V6.85714Z"
          fill="${props.color ? props.color : '#98A9BC'}"
        />
      </g>
      <defs>
        <clipPath id="clip0_17128_3286">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
    `;
};