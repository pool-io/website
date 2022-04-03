export type SideBarProps = {};

export default function SideBar(props: SideBarProps) {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                width: '200px',
                // backgroundImage: 'linear-gradient(#f0f0f0,#1975d3)'
                background: '#1975d3'
            }}
        ></div>
    );
}
