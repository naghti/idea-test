type Props = {value: string} & React.ComponentPropsWithoutRef<"input">

function InputTask({value, ...props}: Props) {
  return (
    <input
      type="text"
      value={value}
      className="text-white font-bold text-base bg-transparent w-full border-2 border-gray-400 outline-none rounded-md px-2 focus:border-blue-border"
      placeholder="Введите текст..."
      {...props}
    />
  )
}

export default InputTask