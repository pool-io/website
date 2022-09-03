import { User } from './user';

export type Pool = {
    id: string;
    name: string;
    amount: string;
    image: string;
    isPrivate: boolean;
    members: Member[];
};

export type Tank = {
    id: string;
    name: string;
    amount: string;
    image: string;
    isPrivate: boolean;
    members: Member[];
};

export type Member = {
    member: User;
};
