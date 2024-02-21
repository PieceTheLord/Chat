import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>
>(({ className, ...props }, ref) => {
  return <input className={`py-1 px-2 border border-gray-400
  focus:border-blue-400 outline-none rounded w-full ${className}`} 
  {...props} ref={ref} />
}) 