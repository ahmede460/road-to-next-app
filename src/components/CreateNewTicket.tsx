"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import { Plus, X, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import paths from "@/paths";
import postTicket from "@/queries/post-ticket";


const createTicketSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export default function CreateNewTicket(){
    const [isClicked, setIsClicked] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [errors, setErrors] = useState<{ title?: string; content?: string }>({});
    const router = useRouter();



    function handleClick(){
        setIsClicked(!isClicked)

    }

    async function handleTicketSubmit(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        setIsSubmit(!isSubmit)
        

        const form = (event.target as HTMLButtonElement).form;
        if (!form) return;

        const formData = new FormData(form);

        const ticketData = {
          title: formData.get("title") as string,
          content: formData.get("content") as string,
      };

      const validation = createTicketSchema.safeParse(ticketData);

      if (!validation.success) {
        const newErrors: Record<string, string> = {}; // Ensure an empty object
      
        validation.error.errors.forEach((error) => {
          const key = error.path[0] as keyof typeof newErrors;
          newErrors[key] = error.message;
        });

      
        setErrors(newErrors); // Update state correctly
        setIsSubmit(false);
        return;
      }
      

          

          try {
            await postTicket({ newTicket: ticketData });

          setIsClicked(!isClicked)
          toast("Ticket successfully created!")
          router.push(paths.ticketPath);
          
          }catch(error){
            toast("Ticket submission failed. Please try again later or contact support.")
          }
          finally{
            setIsSubmit(false)
          }
          
        
        
    }
    
    

    return <div className="flex gap-2">
       {isClicked && <div className="absolute right-20 h-130 w-100 border bg-white dark:bg-black z-10 rounded-md animate-fade-from-top shadow-md p-5">
        <h3 className="text-center font-semibold text-lg mb-3">Submit a new ticket</h3>
        <form action="" method="" className="flex flex-col gap-3">

            <div>       
            <Label className="mb-1" htmlFor="title" >Title</Label>
            <Input id="title" name="title" type="text"></Input>
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

</div>
            <div>         <Label className="mb-1" htmlFor="content" >Content</Label>
            <Textarea className="h-70" id="content" name="content"></Textarea></div>
            {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}


            <Button className="cursor-pointer" onClick={handleTicketSubmit}>{isSubmit ?  <LoaderCircle className="animate-spin" /> : "Submit"}</Button>
            
   
            
        </form>
        </div>}
        <Button onClick={handleClick} className="cursor-pointer animate-fade-from-top">{ isClicked ? <X /> : <Plus />}</Button>
    </div>
}