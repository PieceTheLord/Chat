import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return <button className={`border-2 border-gray-900 bg-blue-600
  p-2 w-full text-white rounded font-bold hover:bg-blue-500 focus:bg-blue-400
  transition duration-[400ms] disabled:bg-gray-400 ${className}`}
  {...props} 
  ref={ref}
  >
  
  </button>
}) 