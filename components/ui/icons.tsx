import React from "react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	Google: (props: IconProps) => (
		<svg
			height="16"
			strokeLinejoin="round"
			viewBox="0 0 16 16"
			width="16"
			{...props}
		>
			<path
				d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z"
				fill="#4285F4"
			></path>
			<path
				d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z"
				fill="#34A853"
			></path>
			<path
				d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z"
				fill="#FBBC05"
			></path>
			<path
				d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z"
				fill="#EA4335"
			></path>
		</svg>
	),
	Github: (props: IconProps) => (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 496 512"
			height="200px"
			width="200px"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
		</svg>
	),
	Discord: (props: IconProps) => (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 640 512"
			height="200px"
			width="200px"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
		</svg>
	),
	Passkey: (props: IconProps) => (
		<svg
			fill="none"
			height="23"
			viewBox="0 0 23 23"
			width="23"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9.14459 10.921C12.0223 10.921 14.3551 8.5882 14.3551 5.71051C14.3551 2.83283 12.0223 0.5 9.14459 0.5C6.26691 0.5 3.93408 2.83283 3.93408 5.71051C3.93408 8.5882 6.26691 10.921 9.14459 10.921Z"
				fill="currentColor"
			></path>
			<path
				d="M23.0393 10.921C23.0418 10.1952 22.8494 9.48196 22.4821 8.85592C22.1147 8.22987 21.586 7.71398 20.9511 7.36213C20.3163 7.01029 19.5985 6.83542 18.873 6.85578C18.1474 6.87615 17.4406 7.09101 16.8265 7.47792C16.2124 7.86483 15.7134 8.40957 15.3818 9.05524C15.0502 9.7009 14.898 10.4238 14.9413 11.1483C14.9845 11.8729 15.2216 12.5725 15.6277 13.1742C16.0338 13.7758 16.594 14.2573 17.2498 14.5684V20.7631L18.9867 22.4999L21.8814 19.6052L20.1446 17.8684L21.8814 16.1315L20.4456 14.6957C21.2082 14.4015 21.8639 13.8835 22.3268 13.2099C22.7897 12.5362 23.0381 11.7384 23.0393 10.921ZM18.9867 10.921C18.7577 10.921 18.5338 10.8531 18.3434 10.7259C18.153 10.5986 18.0046 10.4178 17.9169 10.2062C17.8293 9.99465 17.8064 9.76184 17.851 9.53723C17.8957 9.31262 18.006 9.1063 18.1679 8.94437C18.3299 8.78243 18.5362 8.67215 18.7608 8.62748C18.9854 8.5828 19.2182 8.60573 19.4298 8.69337C19.6414 8.78101 19.8222 8.92942 19.9494 9.11983C20.0767 9.31024 20.1446 9.53411 20.1446 9.76312C20.1446 10.0702 20.0226 10.3647 19.8054 10.5819C19.5883 10.799 19.2938 10.921 18.9867 10.921Z"
				fill="currentColor"
			></path>
			<path
				d="M13.7067 13.26C12.8176 12.8635 11.855 12.6584 10.8815 12.6579H7.4078C5.56525 12.6579 3.79816 13.3898 2.49528 14.6927C1.1924 15.9956 0.460449 17.7627 0.460449 19.6052V21.921H15.513V15.541C14.7322 14.9411 14.1117 14.1576 13.7067 13.26Z"
				fill="currentColor"
			></path>
		</svg>
	),
};