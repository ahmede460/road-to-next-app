import { Separator } from "@/components/ui/separator"
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export default function SignUp(){
    return  <div>
        <div className="flex justify-between items-center">
        <div><h2 className="text-3xl font-bold animate-fade-from-top">Sign Up</h2>
        <p className="text-sm text-gray-400 animate-fade-from-top">create an account</p></div>
        </div>
        <Separator className="mb-3 mt-1" />
        
    </div>
}