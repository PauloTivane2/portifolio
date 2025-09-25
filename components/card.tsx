import type * as React from "react"
import { twMerge } from "tailwind-merge"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        "bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
