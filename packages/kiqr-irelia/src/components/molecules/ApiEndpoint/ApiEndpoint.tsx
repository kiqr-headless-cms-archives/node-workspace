import React from 'react'
import { ReactElement } from 'react'
import { FaLink } from 'react-icons/fa'

export interface ApiEndpointProps {
  url: string
}

export const ApiEndpoint = ({ url }: ApiEndpointProps): ReactElement => {
  // page
  return (
    <div className="flex items-center bg-primary-800 p-2 text-xs gap-x-2 rounded">
      <div className="bg-primary-900 text-white mr-1 w-8 h-8 rounded flex items-center justify-center">
        <FaLink />
      </div>
      <strong className="text-white">GET</strong>
      <a target="_blank" className="text-white hover:text-white" href="#">
        {url}
      </a>
    </div>
  )
}
