import { Suspense, lazy, useEffect, useState } from 'react'
import { LoadingSuspense } from './LoadingSuspense'

export default function LoadSuspense ({
  load,
  params
}) {
  const [MModule, setModule] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (load) {
      setModule(lazy(load))
      setLoading(false)
    }
  }, [load])

  return (
    <Suspense fallback={<LoadingSuspense />}>
      {!loading && MModule ? <MModule {...params} /> : <LoadingSuspense />}
    </Suspense>
  )
}
