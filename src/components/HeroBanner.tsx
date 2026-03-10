import {Github, Linkedin} from "lucide-react";
import {Button} from "./UI_Elements.tsx"

export function HeroBanner()
{

    return (
        <>
            <div className="h-[700px] w-[75%] bg-slate-500 flex flex-col items-center justify-center drop-shadow-xl">
                <div className="mb-8">
                <img
                    src="src\assets\ProfilePicture.jpg"
                    alt="Picture of Author"
                    className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-outline
                    shadow-lg shadow-gray-500 transition-transform hover:scale-[1.15]"
                />
                </div>
                <h1 className="text-5xl md:text-5xl mb-4">Karthik</h1>
                <p className="text-2xl text-gray-400 mb-6">Computer Science Student</p>
                <p className="text-xl text-black max-w-2xl mx-auto mb-8">
                Passionate about creating innovative solutions through code. 
                Currently pursuing a Bachelor's degree in Computer Science with a focus on 
                full-stack development and machine learning.
                </p>
                <div className="flex gap-4 justify-center mb-8">
                <Button variant= "default" size="default" onClick = {() => {}}>
                    Contact Me
                </Button>
                <Button variant = "default" size="default" onClick = {() => {}}>
                    <Github className = "mr-2"/>
                    GitHub
                </Button>
                <Button variant = "default" size="default" onClick = {() => {}} >
                    <Linkedin className = "mr-2"/>
                    LinkedIn
                </Button>
                </div> 
            </div>
        </>
    )
}