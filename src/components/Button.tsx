import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...props}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={clsx('text-black font-semibold font-sans py-3 px-4 transition-colors bg-cyan-500 rounded text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white', className)} {...props}>
      {children}
    </Comp>
  )
}