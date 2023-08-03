import Link from "next/link"
import { forwardRef, type ForwardedRef } from "react"

import Wrapper from "@/components/layout/layout-wrapper"
import ThemeToggle from "@/components/theme-toggle/theme-toggle"
import DesktopNavItem from "./desktop-nav-item"

function navigation(_: unknown, ref: ForwardedRef<HTMLElement>) {
  return (
    <header
      ref={ref}
      className="sticky top-0 isolate z-[999] w-full shadow-nav"
    >
      <Wrapper>
        <div className="flex items-center py-3">
          <Link href="/" className="text-xl font-bold text-foreground">
            DK
          </Link>

          <nav className="ml-auto flex items-center">
            <DesktopNavItem />

            <div className="ml-6 flex">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}

export default forwardRef<HTMLElement, unknown>(navigation)
