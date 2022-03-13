type DropProps = {
    color?: string;
    width?: number;
    height?: number;
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M400 624C573.97 624 715 594.003 715 557C715 519.997 573.97 490 400 490C226.03 490 85 519.997 85 557C85 594.003 226.03 624 400 624ZM400.5 567C506.263 567 592 554.24 592 538.5C592 522.76 506.263 510 400.5 510C294.737 510 209 522.76 209 538.5C209 554.24 294.737 567 400.5 567Z"
                fill={props.color ? props.color : 'white'}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M484.084 290.831L412.5 176L340.915 290.831C333.351 302.466 329 316.096 329 330.666C329 373.376 366.384 408 412.5 408C458.616 408 496 373.376 496 330.666C496 316.095 491.649 302.466 484.084 290.831Z"
                fill={props.color ? props.color : 'white'}
            />
        </svg>
    );
}
