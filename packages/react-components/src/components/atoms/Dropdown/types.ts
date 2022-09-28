export interface DropdownProps {
  avatarUrl?: string
  line1?: string
  line2?: string
  openByDefault?: boolean
}

export interface DropdownListProps {
  items: Array<DropdownProps>
  visible: boolean
}
