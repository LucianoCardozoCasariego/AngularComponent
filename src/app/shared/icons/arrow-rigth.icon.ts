import { Icons } from '../../interfaces/Icons.interface';

export const arrow_rigth = (props: Icons) => {
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
        d="M5.53 5.05053C5.51045 4.84826 5.42879 4.65701 5.29622 4.503L1.75259 0.368762C1.67007 0.2658 1.56768 0.180478 1.45153 0.11787C1.33538 0.0552618 1.20782 0.0166398 1.07644 0.00430769C0.945068 -0.00802441 0.812554 0.00618865 0.686778 0.0460869C0.561001 0.0859852 0.444529 0.150757 0.344284 0.236563C0.244039 0.322369 0.162068 0.427449 0.103241 0.545564C0.0444151 0.663678 0.00993506 0.792419 0.00184983 0.924124C-0.00623541 1.05583 0.0122395 1.18781 0.0561767 1.31224C0.100114 1.43666 0.168616 1.55098 0.257613 1.64841L3.25372 5.14282L0.257613 8.63723C0.168616 8.73466 0.100114 8.84898 0.0561767 8.9734C0.0122395 9.09783 -0.00623541 9.22981 0.00184983 9.36152C0.00993506 9.49322 0.0444151 9.62196 0.103241 9.74008C0.162068 9.85819 0.244039 9.96327 0.344284 10.0491C0.444529 10.1349 0.561001 10.1997 0.686778 10.2396C0.812554 10.2795 0.945068 10.2937 1.07644 10.2813C1.20782 10.269 1.33538 10.2304 1.45153 10.1678C1.56768 10.1052 1.67007 10.0198 1.75259 9.91688L5.29622 5.78264C5.38229 5.68252 5.44734 5.56612 5.4875 5.44035C5.52767 5.31457 5.54212 5.182 5.53 5.05053Z"
        fill="${props.color ? props.color : '#009EF7'}"
      />
    </svg>`;
};
