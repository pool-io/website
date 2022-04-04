import Link from 'next/link';

export type SideBarProps = {};

export default function SideBar(props: SideBarProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '250px',
                // backgroundImage: 'linear-gradient(#f0f0f0,#1975d3)'
                background: '#1975d3'
            }}
        >
            <Link href="/portal">
                <h1>Home</h1>
            </Link>
            <Link href="/portal/pools">
                <h1>Pools</h1>
            </Link>
            <Link href="/portal/tanks">
                <h1>Tanks</h1>
            </Link>
            <Link href="/portal/friends">
                <h1>Friends</h1>
            </Link>
            <Link href="/portal/explore">
                <h1>Explore</h1>
            </Link>
            <Link href="/portal/profile">
                <h1>Profile</h1>
            </Link>
        </div>
    );
}
