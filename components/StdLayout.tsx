import classNames from 'classnames'
import { ReactNode } from 'react'
import ContactFloatingButton from './ContactFloatingButton'
import Footer from './Footer'
import Navbar from './Navbar'

type StdLayoutProps = {
  children: ReactNode
  className?: string
  wrapperClassName?: string
  showNavbar?: boolean
  activeKey?: string
}

export default function StdLayout({ children, className, wrapperClassName, activeKey, showNavbar = true }: StdLayoutProps) {
  return (
    <div className={classNames('block', className)}>
      {showNavbar && <Navbar activeKey={activeKey} />}
      <main className={wrapperClassName}>{children}</main>
      <Footer />
      <ContactFloatingButton />
    </div>
  )
}