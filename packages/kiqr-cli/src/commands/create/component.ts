import { Command, Flags } from '@oclif/core'
import {
  buildFieldsFromArgs,
  components,
  project,
  promptForString,
  view,
} from '../../utils'

import inflection from 'inflection'

import { Component } from '@kiqr/management-api-sdk'

export default class CreateComponentCommand extends Command {
  static description = 'Create a new component'
  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> --name "My component"',
  ]

  static flags = {
    name: Flags.string({ char: 'n', description: 'Name of the component' }),
    force: Flags.boolean(),
  }

  static args = [{ name: 'id', required: true }]

  public async run(): Promise<void> {
    if (!project.hasConfig()) {
      return view('errors/config-not-found')
    }

    const { args, flags } = await this.parse(CreateComponentCommand)

    // Parse id from arguments
    const id = inflection.transform(args.id, ['dasherize'])

    // Ask user for a name of the component.
    const nameQuestion = 'Give your component a human readable name:'
    const nameSuggestion = inflection.transform(id, ['humanize'])
    const name =
      flags.name ??
      inflection.transform(
        flags.name ?? (await promptForString(nameQuestion, nameSuggestion)),
        ['capitalize']
      )

    // Build fields object from parsed --fields flag
    const fields = flags.fields ? buildFieldsFromArgs(flags.fields) : []

    // Build component
    const component: Component = {
      id: id,
      name: name,
      fields: fields,
    }

    // Store component to file.
    components.saveToFile(component, flags.force)

    view('schemas/component-created', component)
  }
}
