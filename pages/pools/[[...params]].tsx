import Layout from '@components/Layout';
import Modal from '@components/Modal';
import { Pool } from '@model/pool';
import Image from 'next/image';
import { useState } from 'react';

export default function Pools() {
    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: 10
                // background: 'green'
            }}
        >
            <div
                style={{
                    margin: 10,
                    background: 'black',
                    borderRadius: 10
                }}
            >
                <div
                    style={{
                        paddingLeft: 10,
                        color: 'white'
                    }}
                >
                    <h1>Pools</h1>
                </div>
                <PoolList
                    pools={[
                        {
                            id: 'ipoltest1',
                            name: 'test1',
                            amount: '$1.00',
                            image: '/images/favicon.png',
                            isPrivate: true,
                            members: null
                        },
                        {
                            id: 'ipoltest2',
                            name: 'long name',
                            amount: '$2.00',
                            image: '/images/favicon.png',
                            isPrivate: true,
                            members: null
                        },
                        {
                            id: 'ipoltest3',
                            name: 'another long name',
                            amount: '$3.00',
                            image: '/images/favicon.png',
                            isPrivate: false,
                            members: null
                        }
                    ]}
                />
            </div>
        </Layout>
    );
}

type PoolListProps = {
    pools: Pool[];
};

function PoolList(props: PoolListProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // background: 'yellow',
                margin: 10
            }}
        >
            {props.pools.map((pool: Pool) => {
                return <PoolListEntry pool={pool} />;
            })}
        </div>
    );
}

type PoolListEntryProps = {
    pool: Pool;
};

function PoolListEntry(props: PoolListEntryProps) {
    const [isModal, setIsModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    console.log('isModal', isModal);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: isModal ? 'lightgrey' : 'white',

                    borderRadius: 5,
                    padding: 5,
                    margin: 3,

                    cursor: 'pointer'
                }}
                onClick={() => setIsModal(true)}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <div
                        style={{
                            flex: 1
                        }}
                    >
                        <Image
                            width="30px"
                            height="30px"
                            src={props.pool.image}
                        />
                    </div>
                    <p
                        style={{
                            flex: 2,
                            padding: 5
                            // background: 'pink'
                        }}
                    >
                        {props.pool.name}
                    </p>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        {props.pool.isPrivate ? (
                            <Image
                                width="15px"
                                height="15px"
                                src={'/images/lock.svg'}
                            />
                        ) : null}
                    </div>
                    <p style={{ flex: 1 }}>{props.pool.amount}</p>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{
                                cursor: 'pointer',
                                background: '#00ffc0'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(!isExpanded);
                            }}
                        >
                            {isExpanded ? (
                                <Image
                                    width="500px"
                                    height="30px"
                                    src={'/images/up-arrow.svg'}
                                />
                            ) : (
                                <Image
                                    width="500px"
                                    height="30px"
                                    src={'/images/down-arrow.svg'}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {isExpanded ? (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                                //background: 'yellow'
                                // alignContent: 'center'
                            }}
                        >
                            <div>
                                <p>Members</p>
                            </div>
                            <div>
                                <p>Last Transaction</p>
                            </div>
                            <div>
                                <p>Created</p>
                            </div>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                                // alignContent: 'center'
                            }}
                        >
                            <div>
                                <p>Members</p>
                            </div>
                            <div>
                                <p>Last Transaction</p>
                            </div>
                            <div>
                                <p>Created</p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            {isModal ? (
                <PoolListEntryModal
                    pool={props.pool}
                    onClick={() => setIsModal(false)}
                />
            ) : null}
        </>
    );
}

type PoolListEntryModal = {
    pool: Pool;
    onClick: () => void;
};

function PoolListEntryModal(props: PoolListEntryModal) {
    return (
        <Modal onClick={props.onClick}>
            <h1>{props.pool.name}</h1>
        </Modal>
    );
}
