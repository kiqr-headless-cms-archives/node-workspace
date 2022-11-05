import { useCurrent } from '.'

export const useContentTypes = () => {
  const { currentSchema } = useCurrent()
  const contentTypes = currentSchema?.data?.content_types

  return { contentTypes }
}
