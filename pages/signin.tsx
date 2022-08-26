import Auth from '@components/Auth';
import Layout from '@components/Layout';

export default function SignIn() {
    return (
        <Layout route="/signin">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <Auth isSignUp={false} />
            </div>
        </Layout>
    );
}
