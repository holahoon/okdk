import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "Hooniverse blog",
  description: "This is DK's blog",
}

export default function BlogLayout(props: LayoutProps) {
  const { children } = props

  return (
    <main className="prose mx-auto max-w-screen-full px-4 dark:prose-invert">
      {children}
    </main>
  )
}
