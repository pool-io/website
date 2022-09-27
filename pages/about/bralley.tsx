import Layout from '@components/Layout';
import Image from 'next/image';

export default function Learn() {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'left',
                    width: '100%',
                    height: '100%',
                    fontSize: '20px',
                    backgroundColor: 'powderblue'
                }}
            >
                <h1>About Us</h1>
                <Image src="/images/phone.png" width={400} height={400} />
            </div>
        </Layout>
    );
}
