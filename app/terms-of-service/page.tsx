import StdLayout from "@/components/StdLayout";
import type { Metadata } from 'next';
import TosCards from "./components/TosCard";

export const metadata: Metadata = {
  title: 'Terms of Service | Master Online - Solusi Bisnis Online',
}


export default function TermsOfService() {
  return (
    <StdLayout className="bg-neutral-100 text-black">
      <TosCards />
    </StdLayout>
  )
}