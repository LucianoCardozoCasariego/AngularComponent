import { Icons } from '../../interfaces/Icons.interface';

export const reportes = (props: Icons) => {
  return `
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class='${props.className}'
      ${props.width && 'width=' + props.width}
      ${props.height && 'height=' + props.height}
    >
      <g clip-path="url(#clip0_17128_3300)">
        <path
          d="M0.544922 1.36359C0.544922 1.1466 0.631123 0.938489 0.784562 0.78505C0.938001 0.631611 1.14611 0.54541 1.3631 0.54541H7.90856C8.12555 0.54541 8.33366 0.631611 8.4871 0.78505C8.64054 0.938489 8.72674 1.1466 8.72674 1.36359V11.4545H1.3631C1.14611 11.4545 0.938001 11.3683 0.784562 11.2149C0.631123 11.0614 0.544922 10.8533 0.544922 10.6363V1.36359ZM8.72674 5.99996C8.72674 5.85529 8.78421 5.71655 8.8865 5.61426C8.98879 5.51197 9.12753 5.4545 9.27219 5.4545H10.3631C10.5078 5.4545 10.6465 5.51197 10.7488 5.61426C10.8511 5.71655 10.9086 5.85529 10.9086 5.99996V10.6363C10.9086 10.8533 10.8224 11.0614 10.6689 11.2149C10.5155 11.3683 10.3074 11.4545 10.0904 11.4545H8.72674V5.99996Z"
          stroke-linejoin="round"
          stroke="${props.color ? props.color : '#98A9BC'}"
        />
        <path
          d="M2.18164 2.72705H4.36346M2.18164 4.63614H5.45437"
          stroke="${props.color ? props.color : '#98A9BC'}"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_17128_3300">
          <rect width="11.4545" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>`;
};
