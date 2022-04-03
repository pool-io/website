import { User } from 'firebase/auth';
import { useState } from 'react';
import SideBar from './components/SideBar';
import Overview from './pages/Overview';
import Profile from './pages/Profile';
import Error from './pages/Error';

type PortalProps = {
    user: User;
};

export enum Page {
    OVERVIEW,
    PROFILE
}

export default function Portal(props: PortalProps) {
    const [page, setPage] = useState<Page>(Page.OVERVIEW);

    const handlePage = (page: Page) => {
        setPage(page);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
            }}
        >
            <SideBar handlePage={handlePage} />
            {(() => {
                switch (page) {
                    case Page.OVERVIEW:
                        return <Overview user={props.user} />;
                    case Page.PROFILE:
                        return <Profile user={props.user} />;
                    default:
                        return <Error handlePage={handlePage} />;
                }
            })()}
        </div>
    );
}
