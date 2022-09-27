import Layout from '@components/Layout';
import Image from 'next/image';

export default function Isaac() {
    type Founder = {
        name: string;
        profile: string;
    };

    const NAMES = [
        [
            { name: 'Soung Bae Kim', profile: '/images/penis.jpg' },
            { name: 'Samuel Yoon', profile: '/images/penis.jpg' },
            { name: 'Caleb Park', profile: '/images/penis.jpg' }
        ],
        [
            { name: 'Brian Kim', profile: '/images/penis.jpg' },
            { name: 'Isaac Kim', profile: '/images/penis.jpg' },
            { name: 'David Han', profile: '/images/penis.jpg' }
        ]
    ];

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 100,
                    width: '100%',
                    height: '100%'
                }}
            >
                <h1>About Us</h1>
                <p>Founding Members</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                        // background: 'yellow',
                        width: '100%'
                    }}
                >
                    {NAMES.map((names: Founder[]) => {
                        return (
                            <div
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                {names.map((founder: Founder) => (
                                    <div
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'pink',
                                            margin: 10
                                        }}
                                    >
                                        <h2>{founder.name}</h2>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={founder.profile}
                                        />
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}
