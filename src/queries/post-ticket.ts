"use server";
import axios from "axios";
import paths from "@/paths";
import { revalidatePath } from "next/cache";

type TicketProps = {
    newTicket: {
        title: string;
        content: string;
    }
}

export default async function postTicket({newTicket}: TicketProps ){

    

    try{
    const response = await axios.post("http://localhost:8000/tickets/", newTicket)
    revalidatePath(paths.ticketPath);
    return response.data
    }catch(error){
        console.error("Error occurred while creating the ticket:", error);
        throw error;
    }

}