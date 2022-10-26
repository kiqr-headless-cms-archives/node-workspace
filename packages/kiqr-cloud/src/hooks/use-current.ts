import { useUser } from '../hooks'

export const useCurrent = () => {
  const { user: currentUser, error: userError } = useUser()

  return { currentUser, userError }
}
