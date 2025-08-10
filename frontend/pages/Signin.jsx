import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Sub } from "../components/Sub"
import { InputBox } from "../components/InputBox"
import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate } from "react-router-dom";


export const Signin = ()=>{
    const [username,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const Navigate=useNavigate();

    return(
            <div className="bg-slate-300 flex h-screen justify-center ">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                        <Heading label={"Signin"}/>
                        <Sub label={"enter your details"}/>
                        <InputBox onChange={(e)=>{
                            setuserName(e.target.value)
                        }} placeholder="harkirat@gmail.com" label={"Email"} />
                        <InputBox onChange={(e)=>{
                            setpassword(e.target.value)
                        }} placeholder="123456" label={"Password"} />
                        <Button onClick={async()=>{
                            const API_URL = import.meta.env.VITE_BACKEND_URL;

                            const response=await axios.post(`${API_URL}/api/v1/user/signin`,{
                                username,
                                password
                            })
                            localStorage.setItem("token",response.data.token)
                            Navigate('/dashboard')
                        }} label={"Sign up"} />
                    </div>
                     <BottomWarning
                      label={"Already have an account?"}
                      buttonText={"Sign in"}
                      to={"/signin"}
                      />

                </div>

            </div>
    )
}