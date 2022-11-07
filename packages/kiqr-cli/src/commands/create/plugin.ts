import { Command, Flags } from '@oclif/core'
import {
  buildFieldsFromArgs,
  plugins,
  project,
  promptForString,
  view,
} from '../../utils'

import inflection from 'inflection'

import { Plugin } from '@kiqr/management-api-sdk'

export default class CreatePluginCommand extends Command {
  static description = 'Create a new plugin'
  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> --kind collection --name Posts --fields="title:string description:text"',
  ]

  static flags = {
    name: Flags.string({ char: 'n', description: 'Name of the plugin' }),
    tabName: Flags.string({
      char: 't',
      description: 'Title of the tab navigation link on kiqr.cloud',
    }),
    fields: Flags.string({ char: 'f', description: 'Initial fields' }),
    force: Flags.boolean(),
  }

  static args = [{ name: 'id', required: true }]

  public async run(): Promise<void> {
    if (!project.hasConfig()) {
      return view('errors/config-not-found')
    }

    const { args, flags } = await this.parse(CreatePluginCommand)

    // Parse id from arguments
    const id = inflection.transform(args.id, ['dasherize'])

    // Ask user for a name of the plugin.
    const nameQuestion = 'Give your plugin a human readable name:'
    const nameSuggestion = inflection.transform(id, ['humanize'])
    const name =
      flags.name ??
      inflection.transform(
        flags.name ?? (await promptForString(nameQuestion, nameSuggestion)),
        ['capitalize']
      )

    // Ask user for a name of the plugin.
    const tabNameQuestion = 'Give your plugin a tab title:'
    const tabNameSuggestion = inflection.transform(id, ['humanize'])
    const tabName =
      flags.tabName ??
      inflection.transform(
        flags.tabName ??
          (await promptForString(tabNameQuestion, tabNameSuggestion)),
        ['capitalize']
      )

    // Build fields object from parsed --fields flag
    const fields = flags.fields ? buildFieldsFromArgs(flags.fields) : []

    // Build plugin
    const Plugin: Plugin = {
      id: id,
      name: name,
      tabName: tabName,
      fields: fields,
    }

    // Store plugin to file.
    plugins.saveToFile(Plugin, flags.force)

    view('schemas/plugin-created', Plugin)
  }
}
