import React from 'react'
import moment from 'moment'

export const LocalTime = ({ at }: { at: number }) => {
  const dateTime = moment.unix(at).fromNow()
  return <>{dateTime}</>
}