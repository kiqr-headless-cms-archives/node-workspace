import React from 'react'
import { Placeholder } from '../Placeholder'

export interface IProgressBar {
  title?: string
  statusText?: string
  percentage?: number
}

const getBackgroundColorClass = (percentage: number) => {
  if (percentage <= 33) {
    return 'bg-neutral-300'
  } else if (percentage <= 66) {
    return 'bg-neutral-400'
  } else if (percentage == 100) {
    return 'bg-green-500'
  }

  return 'bg-primary-500'
}

export const ProgressBar = ({
  title,
  statusText,
  percentage = 0
}: IProgressBar) => {
  statusText = statusText || (percentage ? `${percentage}%` : '')

  const colorClass = getBackgroundColorClass(percentage)

  return (
    <>
      <div className="text-xs mb-3 text-primary-700 flex justify-between">
        <strong>{title || <Placeholder length={10} size="xs" />}</strong>
        <span className="text-gray-500 font-bold">
          {statusText || <Placeholder length={10} size="xs" />}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full ${colorClass}`}
          style={{ width: percentage + '%' }}
        ></div>
      </div>
    </>
  )
}
