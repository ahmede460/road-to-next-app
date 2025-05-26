"use server";
import axios from "axios";
import paths from "@/paths";
import { revalidatePath } from "next/cache";

type UpdateTicketProps = {
    existingTicket: {
        id: string;
        title: string;
        content: string;
        status: string
    }
}

export default async function UpdateTicket({existingTicket}: UpdateTicketProps ){

    

    try{
    const response = await axios.put(`http://localhost:8000/tickets/${existingTicket.id}/`, existingTicket)
    revalidatePath(paths.ticketPath);
    return response.data
    }catch(error){
        console.error("Error occurred while updating the ticket:", error);
        throw error;
    }

}