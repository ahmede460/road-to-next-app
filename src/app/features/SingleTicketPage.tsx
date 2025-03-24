import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import getTicket from "@/queries/get-ticket"
import { Check, Waypoints, Ticket } from "lucide-react";
import paths from "@/paths";

type TicketPageProps = {
    ticketId: string
}



export default async function SignleTicketPage({ticketId}: TicketPageProps){

    const ticketStatus = {
        "D": <Check />,
        "O": <Ticket />,
        "WIP": <Waypoints />,
      };
      

    const ticket = await getTicket(ticketId)

    if (!ticket) {
        return <div>Ticket not found</div>;
      }





return <>
    <div className="flex justify-between items-center ">
<div>
  <h2 className="text-3xl font-bold ">{ticket.title}</h2>
  <p className="text-sm text-gray-400 ">ID {ticket.id}</p>
</div>

<span className="">{ // @ts-ignore 
ticketStatus[ticket.status]}</span>
</div>

<Separator className="mb-3 mt-1" />
<div className="">{ticket.content}</div>
<Button className="mt-3 " asChild><Link href={paths.ticketPath}>Back</Link></Button>

</>

    
}
