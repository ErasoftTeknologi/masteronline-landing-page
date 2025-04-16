import StdLayout from "@/components/StdLayout";
import type { Metadata } from 'next';
import About from "./components/About";
import Registration from "./components/Registration";
import './page.module.scss';

export const metadata: Metadata = {
  title: 'Partner | Master Online - Solusi Bisnis Online',
}


export default function Partner() {
  return (
    <StdLayout className="bg-white" activeKey="partner">
      <About />
      <Registration />
    </StdLayout>
  )
}