import App from '@portal/App';
import { useRouter } from 'next/router';

export default function Portal() {
    console.log('Rendering Portal');
    return <App />;
}
