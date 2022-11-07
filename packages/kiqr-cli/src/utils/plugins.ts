import type { Plugin } from '@kiqr/management-api-sdk'

import { pluginsDirectory, pluginsFilePath, createDirectoryPath } from './'
import { dump, load } from 'js-yaml'

import _ from 'lodash'
import fs from 'node:fs'
import path from 'node:path'

const savePluginTofile = (plugin: Plugin, force = false) => {
  const targetPath = pluginsFilePath(plugin)

  // Create content types directory if it doesn't exists.
  createDirectoryPath(targetPath)

  // Check if file exists already.
  if (fs.existsSync(targetPath) && !force) {
    throw new Error('A kiqr.json file exists already at: ' + targetPath)
  }

  fs.writeFileSync(targetPath, dump(plugin), {
    encoding: 'utf8',
    flag: 'w',
  })
}

const readPluginFromFile = (id: string): Plugin | undefined => {
  let fileName = id

  // Add .yaml extension if its missing.
  if (!_.endsWith(fileName, '.yaml')) {
    fileName += '.yaml'
  }

  // Full filePath to content type file.
  const filePath = path.join(pluginsDirectory(), fileName)

  // Return the plugin if it exists already.
  if (fs.existsSync(filePath)) {
    const data = load(fs.readFileSync(filePath, 'utf8')) as Plugin
    return data
  }
}

const getAllPlugins = (): any => {
  // Create content types directory if it doesn't exists.
  const targetDir = pluginsDirectory()
  createDirectoryPath(pluginsDirectory())

  const pluginFiles = []
  for (const filename of fs.readdirSync(targetDir)) {
    if (_.endsWith(filename, '.yaml')) {
      pluginFiles.push(readPluginFromFile(filename))
    }
  }

  return pluginFiles
}

export const plugins = {
  saveToFile: savePluginTofile,
  all: getAllPlugins,
  read: readPluginFromFile,
}
