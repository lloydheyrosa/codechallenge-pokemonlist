export type RootStackParamList = {
    Login: undefined,
    Main: {
        user: string,
    },
}

export enum Route {
    LOGIN = 'Login',
    MAIN = 'Main'
}