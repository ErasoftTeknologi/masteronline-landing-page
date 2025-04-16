 
import classNames from "classnames";
import { ReactNode } from "react";

const MENUS = [
  {
    id: 1,
    title: 'Kebijakan Privasi',
    url: '/terms-of-service#privacy'
  },
  {
    id: 2,
    title: 'Syarat dan Ketentuan',
    url: '/terms-of-service#terms_and_conditions'
  },
  {
    id: 3,
    title: 'Keamanan',
    url: '/terms-of-service#security'
  }
]

type AuthLayoutProps = {
  className?: string
  contentWrapperClassName?: string
  children: ReactNode
}

export default function AuthLayout({ className, contentWrapperClassName, children }: AuthLayoutProps) {
  return (
    <div className={classNames("min-h-screen flex flex-col bg-neutral-100 text-black", className)}>
      <div className={classNames("flex-1", contentWrapperClassName)}>{children}</div>
      <div className="flex-none text-center">
        <div className="p-4 md:p-8 inline-flex flex-col items-center">
          <div className="flex gap-1.5 md:gap-3 lg:gap-4 pb-2 border-b border-slate-400">
            {MENUS.map(c => (
              <a key={c.id} href={c.url} className="font-bold text-xs md:text-sm">{c.title}</a>
            ))}
          </div>
          <div className="pt-2 text-slate-600 text-xs md:text-sm">PT Erasoft Teknologi Indonesia &copy; 2017</div>
        </div>
      </div>
    </div>
  )
}