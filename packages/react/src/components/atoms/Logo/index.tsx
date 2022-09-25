import React from 'react'

export const Logo = () => {
  return (
    <div className="flex items-center justify-center font-bold text-primary-700 hover:text-primary-900 transition">
      <img
        src="http://localhost:8000/logo.svg"
        alt="KIQR Headless CMS"
        className="h-5 w-5 mr-2"
      />
      KIQR.<span className="text-slate-400">CLOUD</span>
    </div>
  )
}
