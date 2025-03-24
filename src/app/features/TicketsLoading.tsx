import { LoaderCircle } from "lucide-react"

export default  function TicketsLoading(){
    
   return <div className="flex justify-center mt-5 w-full h-screen ">
    <LoaderCircle className="animate-spin" size={80} />

   </div>
  

}