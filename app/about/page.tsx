import StdLayout from "@/components/StdLayout";
import type { Metadata } from 'next';
import BestTeamA from "./components/BestTeamA";
import Partners from "./components/Partners";

export const metadata: Metadata = {
  title: 'About | Master Online - Solusi Bisnis Online',
}

export default function AboutUs() {
  return (
    <StdLayout className="bg-white" activeKey="about">
      <BestTeamA />
      <Partners />
    </StdLayout>
  )
}
