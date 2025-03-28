
import SingleTicketPage from "@/app/features/SingleTicketPage";
import SingleTicketLoading from "@/app/features/SingleTicketLoading";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import getTicket from "@/queries/get-ticket";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};






export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  



  return (
    <div>
      <ErrorBoundary fallback="Failed to load ticket :( please reload.">
      <Suspense fallback={<SingleTicketLoading />}>
        <SingleTicketPage ticketId={ticketId} /></Suspense>
      </ErrorBoundary>

     
    </div>

   
  );
}
