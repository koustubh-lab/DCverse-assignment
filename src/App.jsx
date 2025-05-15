import AvatarDashboard from "./components/avatar-dashboard"
import LoadingDashboard from "./components/loading-dashboard"
import { Suspense } from "react"

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Suspense fallback={<LoadingDashboard />}>
        <AvatarDashboard />
      </Suspense>
    </main>
  )
}
