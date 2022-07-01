import { useQuery } from '@apollo/client';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { URL_PARAMS } from '@portal/consts';
import { QUERY_GET_USER } from 'graphql/user';
import { useRouter } from 'next/router';

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
                        <h1>u/{data?.user?.username}</h1>
                        <p>{data?.user?.bio}</p>
                    </>
                )}
            </div>
        </Layout>
    );
}
