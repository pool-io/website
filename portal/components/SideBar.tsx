import Link from 'next/link';
import { Page } from '@portal/App';
import { Router, useRouter } from 'next/router';

type TabProps = {
    name: string;
    isSeletected: boolean;
    onClick(): void;
};

function Tab(props: TabProps) {
    return (
        <button
            style={{
                margin: '10px',
                border: 'none',
                borderRadius: '10px',
                background: props.isSeletected ? 'lightblue' : 'white'
            }}
            onClick={() => props.onClick()}
            // onMouseOver={(e) => }
        >
            <h2>{props.name}</h2>
        </button>
    );
}

export type SideBarProps = {
    page: Page;
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
                background: 'black'
                // background: 'white'
            }}
        >
            <Tab
                name="Home"
                isSeletected={props.page === Page.OVERVIEW}
                onClick={() => props.handlePage(Page.OVERVIEW)}
            />
            <Tab
                name="Pools"
                isSeletected={props.page === Page.POOLS}
                onClick={() => props.handlePage(Page.POOLS)}
            />
            <Tab
                name="Tanks"
                isSeletected={props.page === Page.TANKS}
                onClick={() => props.handlePage(Page.TANKS)}
            />
            <Tab
                name="Friends"
                isSeletected={props.page === Page.FRIENDS}
                onClick={() => props.handlePage(Page.FRIENDS)}
            />
            <Tab
                name="Explore"
                isSeletected={props.page === Page.EXPLORE}
                onClick={() => props.handlePage(Page.EXPLORE)}
            />
            <Tab
                name="Profile"
                isSeletected={props.page === Page.PROFILE}
                onClick={() => props.handlePage(Page.PROFILE)}
            />
        </div>
    );
}
