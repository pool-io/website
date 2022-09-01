import { User } from './user';

export type Pool = {
    id: string;
    name: string;
    amount: string;
    image: string;
    isPrivate: boolean;
    members: Member[];
};

type Member = {
    member: User;
};
