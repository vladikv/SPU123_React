import { USERS } from "../users";
import "./userStyle.css"

export default function UserCard({userName, email, adress}){

    // function RemoveCard(){
    //     let i = USERS.indexOf(userName);
    //     USERS.splice(i);
    // }
    return(
        <div className="UserCard">
            <h3>User: {userName}</h3>
            <p>Email: {email}</p>
            <p>Adress: {adress}</p>
        </div>
    );
}