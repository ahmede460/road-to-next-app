import { Separator } from "@/components/ui/separator"

export default function SingleTicketLoading(){

    return <>
    <div className="flex justify-between items-center animate-fade-from-top">
<div>
  <h2 className="animate-pulse w-25 h-8 bg-gray-200 rounded-md"></h2>
  <p className=" bg-gray-200 h-6 w-14  mt-0.5 rounded-sm animate-pulse"></p>
</div>

<span className="bg-gray-200 w-10 h-10 rounded-sm animate-pulse"></span>
</div>
<Separator className="mb-3 mt-1" />
<div className=" bg-gray-200 w-130 h-20 rounded-sm animate-pulse"></div>


</>


}