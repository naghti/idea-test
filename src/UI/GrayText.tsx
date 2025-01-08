import { ComponentProps } from "react"

type Props = {
  text: string, 
  styles?: React.CSSProperties
} & React.ComponentPropsWithoutRef<"span">

function GrayText({text, styles, ...props}: Props) {
  return (
    <span className="text-md text-gray-400" style={styles} {...props}>
      {text}
    </span>
  )
}

export default GrayText