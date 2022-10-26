import React, { ReactNode } from 'react'
import { Box } from '@kiqr/irelia'

export interface AnnouncementProps {
  title: ReactNode
  paragraph: ReactNode
  button: ReactNode
  image: ReactNode
}

export const Announcement = ({title, paragraph, button, image}: AnnouncementProps) => {
  const defaultOptions = {
    allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
    allowedAttributes: {
      'a': [ 'href' ]
    }
  };

  return (
    <Box>
      <div className="container mx-auto py-24">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="max-w-md mx-auto">
              <h2 className="mb-8 text-4xl md:text-5xl font-heading font-bold text-neutral-900 md:leading-15">
                {title}
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                {paragraph}
              </p>
              <div className="gap-x-5 flex">
                {button}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex pr-20">
            <div className="flex relative flex-1 items-center justify-center">
              {image}
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}