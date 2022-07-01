export type PencilProps = {
    height: string;
    width: string;
};

export default function Pencil(props: PencilProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Filled"
            viewBox="0 0 24 24"
            width={props.width}
            height={props.height}
        >
            <path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z" />
            <path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z" />
        </svg>
    );
}
