import { useContext } from 'react'
import { KiqrContext } from '../components/KiqrContext'

export const useFetcher = () => {
  const { token } = useContext(KiqrContext)

  const config = {
    headers: {
      Authorization: `Bearer ${token?.access_token}`,
    },
  }

  const fetcher = (path: string) =>
    fetch(`https://management-api.kiqr.cloud/${path}`, config).then((r) =>
      r.json()
    )

  return { fetcher }
}
