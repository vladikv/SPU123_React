import UserCard from './UserCard';
import { USERS } from "../users.js";

export default function UserList(){
    return(
        <div>
            {USERS.map((u,i) => <UserCard key={i} {...u}/>)}
        </div>
    );
}