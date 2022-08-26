export type PoolBoxContainerProps = {
    pools: PoolBoxProps[];
};

export function PoolBoxContainer(props: PoolBoxContainerProps) {
    const GROUP_SIZE = 4;

    const toFill =
        props.pools.length % GROUP_SIZE
            ? GROUP_SIZE - (props.pools.length % GROUP_SIZE)
            : 0;
    let dummyPools: PoolBoxProps[] = [];
    for (let i = 0; i < toFill; i++) {
        dummyPools[i] = null;
    }

    const pools = props.pools.concat(dummyPools);
    console.log('toFill: ', toFill);

    let groups: PoolBoxProps[][] = [];
    pools.forEach((pool: PoolBoxProps, index: number) => {
        const group = Math.floor(index / GROUP_SIZE);

        if (index % GROUP_SIZE === 0) {
            groups[group] = [];
        }
        groups[group][index % GROUP_SIZE] = pool;
    });

    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'stretch',
                background: 'orange',
                overflow: 'auto'
            }}
        >
            {groups.map((group: PoolBoxProps[]) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            background: 'green'
                        }}
                    >
                        {group.map((pool: PoolBoxProps) => {
                            return pool ? (
                                <PoolBox
                                    id={pool.id}
                                    name={pool.name}
                                    image={pool.image}
                                    description={pool.description}
                                    members={pool.members}
                                />
                            ) : (
                                <PoolBoxTemplate />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

type PoolBoxTemplateProps = {
    children?: React.ReactNode;
};

function PoolBoxTemplate(props: PoolBoxTemplateProps) {
    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                background: 'white',
                lineHeight: '1px',
                // height: '200px',
                // width: '200px',
                textAlign: 'center',

                padding: '50px',

                border: '1px solid black',
                borderRadius: '10px'
            }}
        >
            {props.children}
        </div>
    );
}

export type PoolBoxProps = {
    id: string;
    name: string;
    image: string;
    description: string;
    members: number;
};

function PoolBox(props: PoolBoxProps) {
    return (
        <PoolBoxTemplate>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <image
                    style={{
                        height: '15vh',
                        width: '15vh',
                        borderRadius: 20,
                        background: 'grey'
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <h1>p/{props.name}</h1>
                    <p>{props.id}</p>
                    <p>{props.description}</p>
                    <p>Members: {props.members}</p>
                </div>
            </div>
        </PoolBoxTemplate>
    );
}
