import type { Component } from '@kiqr/management-api-sdk'

import { componentsDirectory, componentsFilePath, createDirectoryPath } from '.'
import { dump, load } from 'js-yaml'

import _ from 'lodash'
import fs from 'node:fs'
import path from 'node:path'

const saveComponentToFile = (component: Component, force = false) => {
  const targetPath = componentsFilePath(component)

  // Create content types directory if it doesn't exists.
  createDirectoryPath(targetPath)

  // Check if file exists already.
  if (fs.existsSync(targetPath) && !force) {
    throw new Error('A kiqr.json file exists already at: ' + targetPath)
  }

  fs.writeFileSync(targetPath, dump(component), {
    encoding: 'utf8',
    flag: 'w',
  })
}

const readComponentFromFile = (id: string): Component | undefined => {
  let fileName = id

  // Add .yaml extension if its missing.
  if (!_.endsWith(fileName, '.yaml')) {
    fileName += '.yaml'
  }

  // Full filePath to content type file.
  const filePath = path.join(componentsDirectory(), fileName)

  // Return the component if it exists already.
  if (fs.existsSync(filePath)) {
    const data = load(fs.readFileSync(filePath, 'utf8')) as Component
    return data
  }
}

const getAllComponents = (): any => {
  // Create content types directory if it doesn't exists.
  const targetDir = componentsDirectory()
  createDirectoryPath(componentsDirectory())

  const componentFiles = []
  for (const filename of fs.readdirSync(targetDir)) {
    if (_.endsWith(filename, '.yaml')) {
      componentFiles.push(readComponentFromFile(filename))
    }
  }

  return componentFiles
}

export const components = {
  saveToFile: saveComponentToFile,
  all: getAllComponents,
  read: readComponentFromFile,
}
