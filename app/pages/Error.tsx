import { Page } from '@app/Portal';

export type ErrorProps = {
    message?: string;
    handlePage: (page: Page) => void;
    child?: React.ReactNode;
};

export default function Error(props: ErrorProps) {
    return (
        <div>
            {props.child ? (
                props.child
            ) : (
                <>
                    <h1>Unexpected Error</h1>
                    <div onClick={() => props.handlePage(Page.OVERVIEW)}>
                        <p>Return to Overview</p>
                    </div>
                </>
            )}
        </div>
    );
}
