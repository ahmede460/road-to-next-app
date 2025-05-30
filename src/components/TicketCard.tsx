

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Check, Waypoints, Ticket } from "lucide-react";

import paths from "@/paths";

type TicketCardProps = {
    ticket: Ticket;

}



export default function TicketCard({ticket}: TicketCardProps){
    const ticketStatus = {
        "DONE": <Check />,
        "OPEN": <Ticket />,
        "IN_PROGRESS": <Waypoints />,
      };
    return <div
    className="border-1 p-3 rounded-md shadow-sm h-30 w-80 flex flex-col justify-between"
    
    key={ticket.id}
  >
    <div>
        <p className="absolute">{ticketStatus[ticket.status]}</p>
        <h3 className="text-center font-semibold mb-2">
          {ticket.title}
        </h3>
      
      <p className={ticket.status === "DONE" ? "px-2 text-md  text-center line-through" : "px-2 text-md  text-center"}>
        {ticket.content}
      </p>
    </div>

    <Link
      className="text-right"
      href={`${paths.ticketPath}/${ticket.id}`}
    >
      <Button variant={"default"} className="cursor-pointer" size={"sm"}>
     
        Details
      </Button>
    </Link>
  </div>
}