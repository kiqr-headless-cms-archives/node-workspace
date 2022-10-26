import React from 'react'
import {Meta, Story} from '@storybook/react'
import {AppShell, AppShellProps} from './AppShell'
import {FaGithub, FaFire, FaFolder} from 'react-icons/fa'

const meta: Meta = {
  title: 'Atoms/AppShell',
  component: AppShell,
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      control: {type: 'select'},
    },
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const FooterComponent = () => {
  return (
    <footer className="px-5 h-20 items-center justify-center absolute bottom-0 left-0 right-0 flex flex-col text-xs text-neutral-400">
      <span>
        Copyright &copy; WK Operations Ltd 2022 - All rights reserved.
      </span>
      <span className="flex items-center gap-x-1">
        This is an open-source project. Explore and contribute to the
        project on 
        <a
          href="https://github.com/kiqr/node-workspace/tree/main/apps/cloud-editor"
          target="_blank"
          className="flex items-center gap-x-1 font-bold"
        >
          <FaGithub /> Github.
        </a>
      </span>
    </footer>
  )
}

const SidebarComponent = () => {
  return (
    <>
      <nav className="flex flex-col">
        <a className="flex px-5 items-center text-xs text-primary-700 py-4 overflow-hidden hover:bg-neutral-100 border-b font-bold bg-neutral-100">
          <span className="flex items-center justify-center w-4 h-4 mr-4"><FaFire /></span>
          <span>Dashboard</span>
        </a>

        <a className="flex px-5 items-center text-xs text-primary-700 py-4 overflow-hidden hover:bg-neutral-100 border-b">
          <span className="flex items-center justify-center w-4 h-4 mr-4"><FaFolder /></span>
          <span>Resources</span>
        </a>
      </nav>
    </>
  )
}

const ToolbarComponent = () => {
  return <>inside toolbar</>
}

const LogoComponent = () => {
  return <>YOUR LOGO</>
}

const Template: Story<AppShellProps> = args => (
  <AppShell logo={<LogoComponent />} toolbar={<ToolbarComponent />} sidebar={<SidebarComponent />} sidebarOpen={true} footer={<FooterComponent />} {...args}>
    Hello World!
  </AppShell>
)

export const Default = Template.bind({})
Default.args = {}

export const WithoutSidebar = Template.bind({})
WithoutSidebar.args = { sidebar: undefined }