import {
    FormEvent,
    useEffect,
    useState,
    ChangeEventHandler,
    ChangeEvent,
    MouseEvent
} from 'react';
import { SignOutButton } from '@components/Auth';
import useAuthUser from '@hooks/useAuthUser';
import useMyUser from '@portal/hooks/useMyUser';
import { useQuery, useMutation } from '@apollo/client';
import { MUTATION_USER_EDIT, QUERY_GET_USER } from 'graphql/user';

type UpdateUsernameProps = {
    handleClose(): void;
};

function UpdateUsername(props: UpdateUsernameProps) {
    const [username, setUsername] = useState('');
    const [updateUser, { data, loading, error }] =
        useMutation(MUTATION_USER_EDIT);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateUser({ variables: { input: { username: username } } });
        props.handleClose();
    }

    const onUsername: ChangeEventHandler = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        console.log(`username: ${e.target.value}`);
        e.preventDefault();
        setUsername(e.target.value);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="username"
                    placeholder="New Username"
                    onChange={onUsername}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

function Username() {
    const [isEdit, setIsEdit] = useState(false);

    const { loading, error, data } = useQuery(QUERY_GET_USER);

    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        console.log(error);
        return <div>Error</div>;
    }

    console.log(data);

    function handleOnClick(e: MouseEvent) {
        e.preventDefault();
        setIsEdit(true);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: isEdit ? 'column' : 'row'
            }}
        >
            <p>Username: {data?.user?.username}</p>
            {isEdit ? (
                <div>
                    <UpdateUsername
                        handleClose={() => {
                            setIsEdit(false);
                        }}
                    />
                </div>
            ) : (
                <button onClick={(e) => handleOnClick(e)}>edit</button>
            )}
        </div>
    );
}

export default function Profile() {
    const authUser = useAuthUser();
    const [idToken, setIdToken] = useState<string>('');

    useEffect(() => {
        if (authUser && !idToken) {
            authUser.getIdToken().then(setIdToken);
        }
    }, [authUser]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}
        >
            <h1>Profile</h1>
            <Username />
            <p>ID Token:</p>
            <p style={{ width: '50vw', overflowWrap: 'break-word' }}>
                {idToken}
            </p>
            <SignOutButton />
        </div>
    );
}
