import { useSearchParams } from "react-router-dom"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"
import axios from "axios"
import { useState } from "react"


export const SendMoney = ()=>{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id")
    const name=searchParams.get("name")
    const [amount,setamount]=useState(0);
    return(
         <div className="bg-slate-300 flex h-screen justify-center ">
                        <div className="flex flex-col justify-center">
                            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                                <Heading label={"Send Money"}/>
                                <div className="flex pt-10 items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center">
                                     <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                                </div>
                                     <h3 className="text-2xl pl-20 font-semibold">{name.toUpperCase()}</h3>
                                </div>
                                <div className="pt-5">
                                <InputBox onChange={(e)=>{
                                    setamount(e.target.value)
                                }} label={"Amount in Rs"}/>
                                <Button onClick={(e)=>{
                                    axios.post("http://localhost:3000/api/v1/account/transfer",{
                                        to:id,
                                        amount
                                    },{
                                        headers: {
                                            Authorization: "Bearer "+localStorage.getItem("token")
                                        }
                                    }).then((res)=>{
                                        alert(res.data.msg);
                                    })

                                }} label={"send"}/>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
    )
}