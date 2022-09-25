import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { Card } from '../Card'

import { Padding } from '.'

export default {
  title: 'Atoms/Padding',
  component: Padding
} as ComponentMeta<typeof Padding>

export const padding = () => (
  <div className="flex flex-col gap-y-10 w-72">
    <Card
      title="Example in a card"
      subtitle="The text below is wrapped in '<Padding>'"
    >
      <Padding>This text has padding around it.</Padding>
    </Card>
    <Card title="Padding" subtitle="This text has no padding around it:">
      Lorem ipsum dolor sit amet
    </Card>
  </div>
)

export const tinted = () => (
  <div className="flex flex-col gap-y-10 w-72">
    <Card
      title="Example in a card"
      subtitle="The text below is wrapped in '<Padding>'"
    >
      <Padding theme="tinted">This text has padding around it.</Padding>
      <Padding>footer text</Padding>
    </Card>
  </div>
)
