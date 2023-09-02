import React from 'react'

export default function AppButton({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`bg-gradient-to-r from-gradient1 to-gradient2 hover:from-gradient2 hover:to-gradient1 px-4 py-2 rounded-xl text-base text-light font-bold ${className}`}>{children}</button>
  )
}
