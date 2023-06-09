import UserForm from "./UserForm";
import UsersList from "./UsersList";
import React,{useState} from "react";
const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const getUsersList = (userName,userAge) =>{
        setUsersList((prevState)=>{
            return [...prevState, {name : userName, age : userAge}]
        })
    }
return (
    <section>
    <UserForm getUsersList = {getUsersList} />
    <UsersList users = {usersList} /> 
    </section>
);
}

export default Users;