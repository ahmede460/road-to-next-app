import initialTickets from "@/data";
import axios from "axios";

export default async function getTickets(){

    try{
    const response = await axios.get("http://localhost:8000/tickets")
    return response.data
    }catch(error){
        console.log(error)
    }

}