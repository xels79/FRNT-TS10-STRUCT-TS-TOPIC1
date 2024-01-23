import { usersArray, IUser } from './users';
import { usersInfoArray, IUsersInfo } from './userInfo';
interface IShortUserInfo{
    name: string,
    position?: string,
    age?: number,
    gender: string
}

function getUsersJobPositions(usersArray: IUser[]): IShortUserInfo[]
{
    return usersArray.map((element: IUser): IShortUserInfo=>{
        const userInfo: (IUsersInfo | undefined) = usersInfoArray.find((uiel: IUsersInfo)=>{
            return uiel.userid === element.userid;
        })
        if (userInfo){
            return {
                name: element.name,
                gender: element.gender,
                position: userInfo.organization.position,
                age: userInfo.age
            }
        }else{
            return {
                name: element.name,
                gender: element.gender
            };
        }
    });
}

const usersPositions:IShortUserInfo[] = getUsersJobPositions( usersArray );

console.log( usersPositions );
