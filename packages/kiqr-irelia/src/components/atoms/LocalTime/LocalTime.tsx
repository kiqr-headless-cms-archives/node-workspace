import React from 'react'
import moment from 'moment'

export interface LocalTimeProps {
  epochTime: number
  locale?: string
}

export const LocalTime = ({ epochTime, locale }: LocalTimeProps) => {
  if (locale) moment.locale(locale)

  const dateTime = moment.unix(epochTime).calendar()
  return <>{dateTime}</>
}
