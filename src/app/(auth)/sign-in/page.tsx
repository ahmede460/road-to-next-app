import { Separator } from "@/components/ui/separator"

export default function SignIn(){
    return <div>
        <div className="flex justify-between items-center">
        <div><h2 className="text-3xl font-bold animate-fade-from-top">Sign In</h2>
        <p className="text-sm text-gray-400 animate-fade-from-top">Login to your account</p></div>
        </div>
        <Separator className="mb-3 mt-1" />
        
    </div>
}