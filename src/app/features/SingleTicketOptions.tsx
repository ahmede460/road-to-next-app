"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import paths from "@/paths"
import { Trash2, LoaderCircle } from "lucide-react"
import DeleteTicket from "@/queries/delete-ticket"
import { useState } from "react"
import {toast} from "sonner"
import { useRouter } from "next/navigation"

type ticketIdProps = {
    ticketId: string
}

export default function SingleTicketOptions({ticketId}: ticketIdProps){
    const [clicked,setClicked] = useState(false)
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
    
    

    return <div className="flex gap-1 justify-between items-center">
<Button className="mt-3 cursor-pointer" asChild><Link href={paths.ticketPath}>Back</Link></Button>
<Button className="mt-3 cursor-pointer" size="icon" onClick={() => handleDelete()}><Link href="">{clicked ? <LoaderCircle className="animate-spin" /> : <Trash2 />}
</Link> </Button>
</div>
}