import React from 'react'
import { Placeholder } from '../Placeholder'

export interface ProgressBarProps {
  title?: string
  startText?: string
  completedText?: string
  percentage?: number
}

export const ProgressBar = ({
  title,
  startText = 'Not started',
  completedText = 'Completed',
  percentage = 0
}: ProgressBarProps) => {
  const statusText = (percentage === 0 || percentage === 100) ? (percentage === 0 ? startText : completedText) : `${percentage}%`
  
  const colorClass = (percentage: number) => {
    if (percentage <= 33) {
      return 'bg-neutral-300'
    } else if (percentage <= 66) {
      return 'bg-neutral-400'
    } else if (percentage == 100) {
      return 'bg-green-500'
    }

    return 'bg-primary-500'
  }

  return (
    <>
      <div className="text-xs mb-3 text-primary-700 flex justify-between">
        <strong>{title}</strong>
        <span className="text-gray-500 font-bold">
          {statusText}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full ${colorClass(percentage)}`}
          style={{ width: percentage + '%' }}
        ></div>
      </div>
    </>
  )
}
