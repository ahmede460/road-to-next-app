"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import paths from "@/paths"
import { Trash2, LoaderCircle, Pencil, X } from "lucide-react"

import UpdateTicket from "@/queries/update-ticket"
import DeleteTicket from "@/queries/delete-ticket"
import { useState } from "react"
import {toast} from "sonner"
import {z} from "zod"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { TicketStatus } from "@prisma/client"

const editTicketSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  status: z.string().min(1, "Status is required"),
});

type ticketIdProps = {
    ticketId: string
    ticketTitle: string
    ticketContent: string
    ticketStatus: string
}

type UpdateTicketProps = {
    existingTicket: {
        id: string;
        title: string;
        content: string;
        status: string
    }
}

export default function SingleTicketOptions({ticketId, ticketTitle, ticketContent, ticketStatus}: ticketIdProps){
    const [clicked,setClicked] = useState(false)
    const [isSubmit,setSubmit] = useState(false)
    const [errors, setErrors] = useState<{ title?: string; content?: string; status?: string; }>({});
    const [editButtonclicked,setEditButtonClicked] = useState(false)
    const [selectedValue, setSelectedValue] = useState(ticketStatus)
    const router = useRouter();

    async function handleDelete() {
        

        setClicked(true);
        try {
            await DeleteTicket(ticketId);
            toast("Ticket successfully deleted!");
            router.push(paths.ticketPath);
        } catch (error) {
            toast("An error occurred while deleting the ticket!");
        } finally {
            setClicked(false);
        }
    }

    async function handleTicketUpdate(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        setSubmit(!isSubmit)
        

        const form = (event.target as HTMLButtonElement).form;
        if (!form) return;

        const formData = new FormData(form);

        const ticketData = {
          id: ticketId,
          title: formData.get("title") as string,
          content: formData.get("content") as string,
          status: formData.get("status") as string
        }

        const validation = editTicketSchema.safeParse(ticketData);

        if (!validation.success) {
          const newErrors: Record<string, string> = {}; // Ensure an empty object
        
          validation.error.errors.forEach((error) => {
            const key = error.path[0] as keyof typeof newErrors;
            newErrors[key] = error.message;

            
          }
        
       
        );

        setErrors(newErrors)
        setSubmit(false);
        return;
}



      
        
                  try {
        
                  await UpdateTicket({existingTicket: ticketData});
                  setEditButtonClicked(!editButtonclicked)
                  toast("Ticket successfully updated!")
                //router.push(paths.ticketPath);
                
                  
                  }catch(error){
                    toast("Ticket update failed. Please try again later or contact support.")
                  }
                  finally{
                    setSubmit(false)
                  }





    }



    function handleEditButtonClick(){
        setEditButtonClicked(!editButtonclicked)
    }
    
    

    return <><div className="flex gap-1 justify-between items-center">
<Button className="mt-3 cursor-pointer" asChild><Link href={paths.ticketPath}>Back</Link></Button>
<div className="flex gap-1"><Button className="mt-3 cursor-pointer" size="icon" onClick={() => handleEditButtonClick()}><Link href="">{editButtonclicked ? <X className="" /> : <Pencil />}</Link></Button>
<Button className="mt-3 cursor-pointer" size="icon" onClick={() => handleDelete()}><Link href="">{clicked ? <LoaderCircle className="animate-spin" /> : <Trash2 />}
</Link> </Button></div>

</div>
{editButtonclicked && <div className="absolute right-30 top-48 h-140 w-100 border bg-white dark:bg-black z-10 rounded-md animate-fade-from-top shadow-md p-5 mt-2">
        <h3 className="text-center font-semibold text-lg mt-3">Update ticket</h3>
        <form action="" method="" className="flex flex-col gap-3">

            <div>       
            <Label className="mb-1" htmlFor="title" >Title</Label>
            <Input id="title" name="title" type="text" defaultValue={ticketTitle}></Input>
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
</div>
            <div>         <Label className="mb-1" htmlFor="content" >Content</Label>
            <Textarea className="h-70" id="content" name="content" defaultValue={ticketContent}></Textarea></div>
            {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}

            <Select name="status" onValueChange={setSelectedValue} value={selectedValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="OPEN">Not Complete</SelectItem>
          <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
          <SelectItem value="DONE">Complete</SelectItem>
        </SelectContent>
      </Select>
      {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}

            <Button className="cursor-pointer" onClick={handleTicketUpdate}>{isSubmit ?  <LoaderCircle className="animate-spin" /> : "Update"}</Button>
            
   
            
        </form>
        </div>}</>
}