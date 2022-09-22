import type {ContentType, ContentTypeField, ContentTypeFieldTypeEnum} from '@kiqr/management-api-sdk'
import {contentTypeFilePath, createDirectoryPath} from './'

import inflection from 'inflection'
import fs from 'node:fs'
import {dump} from 'js-yaml'

class ContentTypeFilenameConflict extends Error {}

export const buildFieldsFromArgs = (fieldsFlag: string): ContentTypeField[] => {
  const explodedFieldsFlag = fieldsFlag.split(' ')
  const fields: ContentTypeField[] = []

  for (const field of explodedFieldsFlag) {
    const segments = field.split(':')
    const [name, type] = segments
    fields.push({
      id: name,
      label: inflection.titleize(name),
      type: (type as ContentTypeFieldTypeEnum),
      required: false,
    })
  }

  return fields
}

const saveContentTypeToFile = (contentType: ContentType, force = false) => {
  const targetPath = contentTypeFilePath(contentType)

  // Create content types directory if it doesn't exists.
  createDirectoryPath(targetPath)

  // Check if file exists already.
  if (fs.existsSync(targetPath) && !force) {
    throw new ContentTypeFilenameConflict()
  }

  fs.writeFileSync(targetPath, dump(contentType))
}

export const contentTypes = {
  saveToFile: saveContentTypeToFile,
}
