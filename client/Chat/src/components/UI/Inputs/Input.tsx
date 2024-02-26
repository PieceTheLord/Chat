export const Input = (({ ...props }) => {
  return <input className={`py-1 px-2 border border-gray-400
  focus:border-blue-400 outline-none rounded w-full `} 
  {...props}  type="text"/>
}) 