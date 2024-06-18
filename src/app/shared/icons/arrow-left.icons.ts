import { Icons } from '../../interfaces/Icons.interface';

export const arrow_left = (props: Icons) => {
  return `
    <svg
      class='${props.className}'
      ${props.width && 'width=' + props.width}
      ${props.height && 'height=' + props.height}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.00515604 5.05053C0.0247045 4.84826 0.106367 4.65701 0.238937 4.503L3.78256 0.368762C3.86509 0.2658 3.96747 0.180478 4.08363 0.11787C4.19978 0.0552618 4.32734 0.0166398 4.45871 0.00430769C4.59009 -0.00802441 4.7226 0.00618865 4.84838 0.0460869C4.97416 0.0859852 5.09063 0.150757 5.19087 0.236563C5.29112 0.322369 5.37309 0.427449 5.43191 0.545564C5.49074 0.663678 5.52522 0.792419 5.53331 0.924124C5.54139 1.05583 5.52292 1.18781 5.47898 1.31224C5.43504 1.43666 5.36654 1.55098 5.27754 1.64841L2.28144 5.14282L5.27754 8.63723C5.36654 8.73466 5.43504 8.84898 5.47898 8.9734C5.52292 9.09783 5.54139 9.22981 5.53331 9.36152C5.52522 9.49322 5.49074 9.62196 5.43191 9.74008C5.37309 9.85819 5.29112 9.96327 5.19087 10.0491C5.09063 10.1349 4.97416 10.1997 4.84838 10.2396C4.7226 10.2795 4.59009 10.2937 4.45871 10.2813C4.32734 10.269 4.19978 10.2304 4.08363 10.1678C3.96747 10.1052 3.86509 10.0198 3.78256 9.91688L0.238937 5.78264C0.152867 5.68252 0.0878143 5.56612 0.0476518 5.44035C0.00748968 5.31457 -0.00696182 5.182 0.00515604 5.05053Z"
        fill="${props.color ? props.color : '#009EF7'}"
      />
    </svg>`;
};