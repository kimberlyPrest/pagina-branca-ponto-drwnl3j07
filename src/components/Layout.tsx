import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-white flex items-center justify-center">
      <Outlet />
    </main>
  )
}
