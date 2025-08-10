import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"


export const SendMoney = ()=>{
    return(
         <div className="bg-slate-300 flex h-screen justify-center ">
                        <div className="flex flex-col justify-center">
                            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                                <Heading label={"Send Money"}/>
                                <div class="flex pt-10 items-center space-x-4">
                                <div class="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center">
                                     <span class="text-2xl text-white">S</span>
                                </div>
                                     <h3 class="text-2xl pl-20 font-semibold">Sandeep</h3>
                                </div>
                                <div className="pt-5">
                                <InputBox label={"Amount in Rs"}/>
                                <Button label={"send"}/>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
    )
}