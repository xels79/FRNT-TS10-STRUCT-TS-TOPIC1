export interface IUserBase{
    userid: string,
    name: string
}
export interface IUser extends IUserBase{
    gender: string
};
export const usersArray: IUser[] = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        gender: 'man'
    },
    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        gender: 'woman'
    }  
]
