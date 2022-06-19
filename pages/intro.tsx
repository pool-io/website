import Layout from '@components/Layout';

export default function Intro() {
    return (
        <div
            style={{
                background: 'black',
                height: '100vh',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <svg
                height={100}
                width={100}
                viewBox="0 0 1000 1000"
                // style={{ background: 'wheat' }}
            >
                <path
                    // d="M50 10 L70 50 L50 90 L30 50 Z"
                    // d="M50 10 L70 50 Q82 75 50 90 Q18 75 30 50 Z"
                    d="M500 100 L700 450   Q900 820  500 845   Q100 820    300 450 Z"
                    fill="blue"
                    stroke="white"
                    strokeWidth="40"
                />
            </svg>
        </div>
    );
}
