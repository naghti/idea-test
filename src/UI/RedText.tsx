function RedText({text, styles}: {text: string, styles?: React.CSSProperties}) {
  return (
    <span className="text-md text-red-800 font-bold" style={styles}>
      {text}
    </span>
  )
}
export default RedText