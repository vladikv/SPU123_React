import UserCard from './UserCard';

export default function UserList({users}){
    return(
        <div>
            <h2>User list</h2>
            {users.map((u,i) => <UserCard key={i} {...u}/>)}
        </div>
    );
}