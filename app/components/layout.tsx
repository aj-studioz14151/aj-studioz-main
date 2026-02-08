import { ComponentsSidebar } from '@/components/components-sidebar'

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#060010]">
      <ComponentsSidebar />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
