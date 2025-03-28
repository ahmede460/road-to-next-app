import { Separator } from "@/components/ui/separator"
import getTicket from "@/queries/get-ticket"
import { Check, Waypoints, Ticket } from "lucide-react";
import SingleTicketOptions from "@/app/features/SingleTicketOptions";


type TicketPageProps = {
  ticketId: string; // Corrected the type from "String" (capital S) to "string" (lowercase s).
};


export default async function SignleTicketPage({ticketId}: TicketPageProps){
  const ticket = await getTicket(ticketId)
    const ticketStatus = {
        "DONE": <Check />,
        "OPEN": <Ticket />,
        "IN_PROGRESS": <Waypoints />,
      };
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

<SingleTicketOptions ticketId={ticket.id} />


</>

    
}
