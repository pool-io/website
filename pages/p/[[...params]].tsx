import Layout from '@components/Layout';
import { URL_PARAMS } from '@portal/consts';
import { useRouter } from 'next/router';

export default function Pool() {
    const router = useRouter();
    const poolID = router.query[URL_PARAMS] ? router.query[URL_PARAMS][0] : '';

    return (
        <Layout route={`/p/${poolID}`}>
            <div
                style={{
                    display: 'flex',

                    height: '100vh',
                    width: '100vw',
                    background: 'white'
                }}
            >
                <h1>{poolID}</h1>
            </div>
        </Layout>
    );
}
