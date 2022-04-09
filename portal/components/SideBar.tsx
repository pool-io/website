import Link from 'next/link';
import { Page } from '@portal/App';

export type SideBarProps = {
    handlePage: (page: Page) => void;
};

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
            <button onClick={() => props.handlePage(Page.OVERVIEW)}>
                <h1>Home</h1>
            </button>
            <button onClick={() => props.handlePage(Page.POOLS)}>
                <h1>Pools</h1>
            </button>
            <button onClick={() => props.handlePage(Page.TANKS)}>
                <h1>Tanks</h1>
            </button>
            <button onClick={() => props.handlePage(Page.FRIENDS)}>
                <h1>Friends</h1>
            </button>
            <button onClick={() => props.handlePage(Page.EXPLORE)}>
                <h1>Explore</h1>
            </button>
            <button onClick={() => props.handlePage(Page.PROFILE)}>
                <h1>Profile</h1>
            </button>
        </div>
    );
}
