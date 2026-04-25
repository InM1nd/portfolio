import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono tracking-wider uppercase",
  {
    variants: {
      variant: {
        default: "terminal-button",
        terminal: "terminal-button",
        destructive:
          "border border-terminal-danger bg-black text-terminal-danger hover:bg-terminal-danger/10",
        outline:
          "border border-terminal-green/50 bg-transparent text-terminal-green hover:bg-terminal-green/10",
        secondary:
          "bg-terminal-dark/50 text-terminal-green border border-terminal-green/30 hover:border-terminal-green",
        ghost: "hover:bg-terminal-green/10 hover:text-terminal-accent text-terminal-green",
        link: "terminal-link-hover",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

