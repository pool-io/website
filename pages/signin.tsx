import Auth from '@components/Auth';
import Layout from '@components/Layout';

export default function SignIn() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
                background: '#f0f0f0'
            }}
        >
            <Auth isSignUp={false} />
        </div>
    );
}
