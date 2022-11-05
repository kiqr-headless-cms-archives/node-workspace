import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex w-full h-full items-center justify-center font-bold text-primary-700 hover:text-primary-900 transition"
    >
      <Image
        src="http://localhost:8000/logo.svg"
        alt="KIQR Headless CMS"
        width={15}
        height={15}
      />
      <span className="ml-2">
        KIQR.<span className="text-slate-400">CLOUD</span>
      </span>
    </Link>
  )
}
