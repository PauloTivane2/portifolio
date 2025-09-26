import React from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-white text-black hover:bg-gray-100 focus-visible:ring-white",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
      ghost: "text-white hover:bg-white/10 focus-visible:ring-white",
      link: "text-white underline-offset-4 hover:underline focus-visible:ring-white",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    const buttonClasses = twMerge(baseStyles, variants[variant], sizes[size], className)

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: twMerge(children.props.className, buttonClasses),
        ref,
        ...props,
      })
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
