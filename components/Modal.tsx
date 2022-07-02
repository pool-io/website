export type ModalProps = {
    onClick(e: any): void;
    children: React.ReactNode;
};

export default function Modal(props: ModalProps) {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: '100vw',
                    background: 'black',
                    zIndex: 98,
                    opacity: 0.7,

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onClick={(e) => props.onClick(e)}
            />
            <div
                style={{
                    height: '50vh',
                    width: '50vw',
                    zIndex: 99,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                    borderRadius: 50
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    );
}
