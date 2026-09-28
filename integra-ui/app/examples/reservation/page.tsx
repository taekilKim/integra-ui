import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import { ReservationFlow } from "@/components/examples/reservation-flow"

export default function ReservationExamplePage() {
  return (
    <main className="min-h-screen bg-surface-subtle px-16 py-32 md:px-32 md:py-64">
      <div className="mx-auto max-w-1040">
        <Link href="/" className="mb-20 inline-flex items-center gap-8 fs-14 font-semibold text-content-secondary transition-colors hover:text-primary">
          <ArrowLeft className="h-16 w-16" /> Integra UI
        </Link>
        <ReservationFlow />
      </div>
    </main>
  )
}
