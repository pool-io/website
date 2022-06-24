export interface Controller {
    /**
     * connects to the backend service
     * @param url url of backend service
     */
    connect(url: string): Promise<void>;

    users: UsersService;
}

type ID = string;

export interface UsersService {
    getUser(id: string): Promise<User>;
}

export interface User {
    getID(): Promise<ID>;
    getUsername(): Promise<string>;
}
