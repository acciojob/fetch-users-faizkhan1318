import React,{useState} from "react";
import axios from "axios";

const UserList=()=>{

    const[user, setUser] = useState([]);

    function getUser(){
        axios.get("https://reqres.in/api/users")
        .then(
            (response)=>setUser(response.data.data)
        ).catch(err=> console.error)
    }

    return(

        <div>
            <span>Blue Whales</span>
            <button onClick={getUser} className="btn">Get User List</button>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length > 0 ? (
                            user.map(user => (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.avatar} alt={user.first_name + " " + user.last_name}/></td>
                                </tr>
                            ))
                        ) : (<td>
                            <tr> No data found to display. </tr>
                        </td>)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default UserList