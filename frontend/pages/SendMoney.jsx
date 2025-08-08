import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"


export const SendMoney = ()=>{
    return(
         <div className="bg-slate-300 flex h-screen justify-center ">
                        <div className="flex flex-col justify-center">
                            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                                <Heading label={"Send Money"}/>
                                <InputBox label={"Amount in Rs"}/>
                            </div>
        
                        </div>
        
                    </div>
    )
}