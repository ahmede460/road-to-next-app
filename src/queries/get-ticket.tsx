import axios from "axios";
import {prisma} from "@/lib/prisma";

export default async function getTicket(ticketId: string ){
    // return await prisma.ticket.findUnique({
    //     where: {
    //         id: ticketId,
    //     },
    // })

    try{
        const response = await axios.get(`http://localhost:8000/tickets/${ticketId}`)
        return response.data
        }catch(error){
            console.log(error)
        }
    
    }