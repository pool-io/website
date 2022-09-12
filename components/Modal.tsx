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
                flexDirection: 'column',
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
                    height: '90vh',
                    width: '70vw',
                    zIndex: 99,
                    display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    background: 'white',
                    borderRadius: 10,
                    padding: 20
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    );
}
