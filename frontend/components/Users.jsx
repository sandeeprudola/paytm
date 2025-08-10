import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";


export const Users = ()=>{
    const [users,setusers]= useState([])
    const [filter,setFilter]=useState("")
        

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/find?filter=" + filter)
            .then(response=>{
                setusers(response.data.user)
            })
    },[filter])
      
    return (
        <>
        <div className="font-bold mt-5 text-lg">
        Users
    </div>
    <div className="my-2">
        <input onChange={(e)=>{
            setFilter(e.target.value)
        }} placeholder="search users..." className="w-full px-2 py-3 border rounded border-slate-200" type="text" name="" id="" />
    </div>
    <div>
    {users.map(user => <User user={user} />)}

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