import TicketCard from "@/components/TicketCard"
import getTickets from "@/queries/get-tickets"
import { error } from "console"

export default async function TicketCards(){
    const tickets = await getTickets()

   
   return <div className="flex gap-3 flex-wrap animate-fade-from-top">
    {tickets.map((ticket: Ticket) => (
      <TicketCard key={ticket.id} ticket={ticket} />
    ))}
  </div>
}