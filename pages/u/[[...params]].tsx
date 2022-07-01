import { useMutation, useQuery } from '@apollo/client';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { URL_PARAMS } from '@portal/consts';
import { MUTATION_USER_UPDATE, QUERY_GET_USER } from 'graphql/user';
import { useRouter } from 'next/router';
import Pencil from '@components/svg/Pencil';
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';

type UpdateUsernameProps = {
    handleClose(): void;
};

function UpdateUsername(props: UpdateUsernameProps) {
    const [username, setUsername] = useState('');
    const [updateUser, { data, loading, error }] =
        useMutation(MUTATION_USER_UPDATE);

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
            <h1>Update Username</h1>
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

function EditUsernameButton() {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing ? (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',

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
                onClick={() => setIsEditing(false)}
            />
            <div
                style={{
                    height: '50vh',
                    width: '50vw',
                    zIndex: 99,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                    borderRadius: 50
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <UpdateUsername handleClose={() => setIsEditing(false)} />
            </div>
        </div>
    ) : (
        <div
            style={{
                margin: 10
            }}
            onClick={() => setIsEditing(true)}
        >
            <Pencil height="20px" width="20px" />
        </div>
    );
}

export default function User() {
    const router = useRouter();
    const userID = router.query[URL_PARAMS] ? router.query[URL_PARAMS][0] : '';

    const { loading, data, error } = useQuery(QUERY_GET_USER, {
        variables: { id: userID ? userID : null }
    });

    return (
        <Layout route={`/u/${userID}`}>
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <image
                            style={{
                                height: 200,
                                width: 200,
                                borderRadius: 20,
                                background: 'grey'
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <h1>u/{data?.user?.username}</h1>
                            <EditUsernameButton />
                        </div>
                        <p>{data?.user?.bio}</p>
                    </>
                )}
            </div>
        </Layout>
    );
}
