export default function (props: { height: string; width: string }) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
            </g>
        </svg>
    );
}
