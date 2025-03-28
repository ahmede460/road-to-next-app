"use server";
import paths from "@/paths";
import {prisma} from "@/lib/prisma"
import { redirect } from "next/navigation";
import axios from "axios";
import { revalidatePath } from "next/cache";

export default async function DeleteTicket(id: string){
    // await prisma.ticket.delete({where: {
    //     id,
    // },
    // });

    try {
        await axios.delete(`http://localhost:8000/tickets/${id}/`);
        revalidatePath(paths.ticketPath);
        return { success: true }; // Return a success indicator
    } catch (error) {
        console.error("Error occurred while deleting the ticket:", error);
        throw error; // Let the error propagate for handling in the component
    }
}

