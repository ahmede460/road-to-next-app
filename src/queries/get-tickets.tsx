
import axios from "axios";
import {prisma} from "@/lib/prisma";

export default async function getTickets(){

    // return await prisma.ticket.findMany();

    try{
    const response = await axios.get("http://localhost:8000/tickets")
    return response.data
    }catch(error){
        console.log(error)
    }

}