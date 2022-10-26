import { useContext } from 'react'
import { useFetcher } from './use-fetcher'
import { KiqrContext } from '../components/KiqrContext'

export const useApi = () => {
  const { token } = useContext(KiqrContext)
  const { fetcher } = useFetcher()

  return { token, fetcher }
}
