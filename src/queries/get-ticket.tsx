import axios from "axios";

export default async function getTicket(ticketId: string ){

    

    try{
        const response = await axios.get(`http://localhost:8000/tickets/${ticketId}`)
        return response.data
        }catch(error){
            console.log(error)
        }
    
    }