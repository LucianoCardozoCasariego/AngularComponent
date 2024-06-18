import { Icons } from '../../interfaces/Icons.interface';

export const X = (props: Icons) => {
  return `
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class='${props.className}'
        ${props.width && 'width=' + props.width}
        ${props.height && 'height=' + props.height}
      >
        <path
          d="M7.5 6.59357L3.90643 3L3 3.90643L6.59357 7.5L3 11.0936L3.90643 12L7.5 8.40643L11.0936 12L12 11.0936L8.40643 7.5L12 3.90643L11.0936 3L7.5 6.59357Z"
          fill="${props.color ? props.color : '#98A9BC'}"
        />
      </svg>
    `;
};
