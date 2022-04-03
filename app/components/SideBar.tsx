import { Page } from '@app/Portal';

export type SideBarProps = {
    handlePage: (page: Page) => void;
};

export default function SideBar(props: SideBarProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '200px',
                // backgroundImage: 'linear-gradient(#f0f0f0,#1975d3)'
                background: '#1975d3'
            }}
        >
            <button onClick={() => props.handlePage(Page.OVERVIEW)}>
                <h1>Overview</h1>
            </button>
            <button onClick={() => props.handlePage(Page.PROFILE)}>
                <h1>Profile</h1>
            </button>
            <button onClick={() => props.handlePage(null)}>
                <h1>Error</h1>
            </button>
        </div>
    );
}
