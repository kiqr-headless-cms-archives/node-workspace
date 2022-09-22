import {findProjectRoot} from './'

const hasConfig = (): boolean => {
  const configPath = findProjectRoot()
  return Boolean(configPath)
}

export const project = {
  hasConfig: hasConfig,
}
