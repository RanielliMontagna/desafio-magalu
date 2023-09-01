import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { PrivateLayout } from 'layouts/privateLayout'
import { PublicLayout } from 'layouts/publicLayout'

import Login from 'containers/login'
import Dashboard from 'containers/dashboard'

import { Loading } from 'components'
import { useAuthStore } from 'store/auth/auth'

export function Router() {
  const { token } = useAuthStore()

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {!token ? (
          <>
            <Route path="/" element={<PublicLayout />}>
              <Route path="/login" element={<Login />} />

              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
          </>
        ) : (
          <Route path="/" element={<PrivateLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  )
}
