import { useState } from "react";
import { Button } from "./Button";


export const Users = ()=>{
    const [users,setusers]= useState([
        { firstName: "John", lastName: "Doe", _id: "1" },
        { firstName: "Jane", lastName: "Smith", _id: "2" },
        { firstName: "Sandeep", lastName: "Rudola", _id: "3" }
      ]);
      
    return (
        <>
        <div className="font-bold mt-5 text-lg">
        Users
    </div>
    <div className="my-2">
        <input placeholder="search users..." className="w-full px-2 py-3 border rounded border-slate-200" type="text" name="" id="" />
    </div>
    <div>
    {users.map(user => <User key={user._id} user={user} />)}

    </div>
</>
    )
}

function User({user}) {
    

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} />
        </div>
    </div>
}