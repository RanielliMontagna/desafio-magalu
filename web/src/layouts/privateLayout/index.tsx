import { Outlet } from 'react-router-dom'

import { Loading } from 'components'
import { useAppStore } from 'store/app/app'

export function PrivateLayout() {
  const { loading } = useAppStore()

  return (
    <>
      {loading && <Loading />}
      <Outlet />
    </>
  )
}
