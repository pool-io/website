type DropProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
};

export default function Drop(props: DropProps) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M400 624C573.97 624 715 594.003 715 557C715 519.997 573.97 490 400 490C226.03 490 85 519.997 85 557C85 594.003 226.03 624 400 624ZM400.5 567C506.263 567 592 554.24 592 538.5C592 522.76 506.263 510 400.5 510C294.737 510 209 522.76 209 538.5C209 554.24 294.737 567 400.5 567Z"
                fill={props.color ? props.color : 'white'}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M484.084 290.831L412.5 176L340.915 290.831C333.351 302.466 329 316.096 329 330.666C329 373.376 366.384 408 412.5 408C458.616 408 496 373.376 496 330.666C496 316.095 491.649 302.466 484.084 290.831Z"
                fill={props.color ? props.color : 'white'}
            />
        </svg>
    );
}

export function LogoTop(props: DropProps) {
    return (
        <svg
            width={props.width}
            height={props.height}
            // viewBox="0 0 2651 4145"
            viewBox="-1230.5 -200 5000 5000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2461.64 2051.23L1325.4 0L189.162 2051.23C69.0749 2259.07 0 2502.56 0 2762.86C0 3525.81 593.4 4144.3 1325.4 4144.3C2057.39 4144.3 2650.79 3525.81 2650.79 2762.86C2650.79 2502.56 2581.72 2259.08 2461.64 2051.23Z"
                fill={props.color ? props.color : '#5FCCE4'}
                stroke="white"
                strokeWidth="200"
            />

            {/* <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M484.084 290.831L412.5 176L340.915 290.831C333.351 302.466 329 316.096 329 330.666C329 373.376 366.384 408 412.5 408C458.616 408 496 373.376 496 330.666C496 316.095 491.649 302.466 484.084 290.831Z"
                fill={props.color ? props.color : 'white'}
            /> */}
        </svg>
    );
}

export function LogoBottom(props: DropProps) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 3500 10000 2394"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
                cx="5000"
                cy="1196.95"
                rx="5000"
                ry="1196.85"
                fill={props.color ? props.color : 'white'}
            />
            <ellipse
                cx="5000"
                cy="866.48"
                rx="3039.68"
                ry="509.107"
                fill="#5FCCE4"
            />
        </svg>
    );
}
