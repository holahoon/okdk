import { type ReactNode } from "react"

import AsideMenu from "@/components/til/aside-menu"

interface TilLayoutProps {
  children: ReactNode
}

export default async function TilLayout(props: TilLayoutProps) {
  const { children } = props

  return (
    <div className="flex">
      <AsideMenu />
      {children}
    </div>
  )
}
