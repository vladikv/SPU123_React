import {useState} from "react";

export default function Likes(){

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


    const plusLikes =()=>{
        setLikes(likes+1);
    } 

    const minusLikes =()=>{
        setLikes(likes-1);

    } 

    const plusDis =()=>{
        setDislikes(dislikes+1);
    } 

    const minusDis =()=>{
        setDislikes(dislikes-1);

    } 

    return(
        <>
            <div className="likes">
                <div>
                    <h2>Likes: {likes}</h2>
                    <button onClick={plusLikes} >+</button>
                    <button onClick={minusLikes} >-</button>
                </div>

                <div>
                    <h2>Dislikes: {dislikes}</h2>
                    <button onClick={plusDis} >+</button>
                    <button onClick={minusDis} >-</button>
                </div>
            </div>
        </>

    );
}