import * as React from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const buttonVariants = {
  variant: {
    default:
      "bg-white text-black hover:bg-neutral-200",
    secondary:
      "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800",
    outline:
      "border border-neutral-800 bg-transparent text-neutral-200 hover:bg-neutral-900",
    ghost:
      "bg-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60",
    destructive:
      "bg-red-600 text-white hover:bg-red-500",
    link:
      "bg-transparent underline-offset-4 hover:underline text-neutral-300 hover:text-white px-0",
  },
  size: {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-6 text-sm",
    icon: "h-9 w-9 p-0",
  },
}

const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", asChild = false, ...props },
  ref
) {
  const Comp = asChild ? "span" : "button"
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50",
        buttonVariants.size[size],
        buttonVariants.variant[variant],
        className
      )}
      {...props}
    />
  )
})

export { Button }


