import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"


export const Signin = ()=>{
    return(
            <div className="bg-slate-300 flex h-screen justify-center ">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                        <Heading label={"Signin"}/>
                        <SubHeading label={"enter your details"}/>
                        <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
                        <InputBox placeholder="123456" label={"Password"} />
                        <Button label={"Signin"}/>
                    </div>

                </div>

            </div>
    )
}