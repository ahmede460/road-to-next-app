import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import TicketCards from "@/app/features/TicketCards";
import TicketsLoading from "@/app/features/TicketsLoading";
import { ErrorBoundary } from "react-error-boundary";


export default function TicketsPage() {



  return (
    <div>
        <div><h2 className="text-3xl font-bold animate-fade-from-top">Tickets</h2>
        <p className="text-sm text-gray-400 animate-fade-from-top">All tickets</p></div>
        <Separator className="mb-3 mt-1" />

      <ErrorBoundary fallback="Failed to load tickets :( please reload.">
      <Suspense fallback={<TicketsLoading />}> 
        <TicketCards />
      </Suspense>
    </ErrorBoundary>
    </div>
  );
}
