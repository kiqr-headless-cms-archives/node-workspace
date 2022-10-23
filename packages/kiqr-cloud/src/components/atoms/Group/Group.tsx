interface GroupProps {
  children: JSX.Element
}

export const Group = ({ children }: GroupProps) => {
  return <div className="flex gap-5">{children}</div>
}
