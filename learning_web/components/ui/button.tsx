import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Định nghĩa các biến thể (variant) và kích thước (size) cho Button sử dụng cva
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:"bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default: "bg-white text-black border-slate-200 border-2 hover:bg-slate-100 text-slate-500",
        // chuyển sang màu xanh da trời
        primary: "bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
        primaryOutline: "bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500/10 dark:text-sky-400 dark:border-sky-400 dark:hover:bg-sky-400/10",
        secondary: "bg-blue-400 text-primary-foreground hover:bg-blue-400/90 border-blue-500 border-b-4 "
        +"active:border-b-0",
        secondaryOutline: "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400/10",
        danger: "bg-rose-400 text-primary-foreground hover:bg-rose-400/90 border-rose-500 border-b-4 active:border-b-0",
        dangerOutline: "bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-500/10 dark:text-rose-400 dark:border-rose-400 dark:hover:bg-rose-400/10",
        super: "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-b-4 "
        +"active:border-b-0",
        superOutline: "bg-transparent border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400/10",
        ghost: "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
        sidebar: "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transition-none dark:text-neutral-400 dark:hover:bg-slate-800",
        sidebarOutline: "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transition-none data-[active=true]:bg-sky-500/15 data-[active=true]:text-sky-500 dark:text-neutral-400 dark:data-[active=true]:text-neutral-100",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 gap-1.5 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Component Button nhận props variant, size, asChild, ...
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  // Nếu asChild=true thì render Slot, ngược lại render button
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
