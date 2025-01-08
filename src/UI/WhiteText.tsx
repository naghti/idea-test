function WhiteText({text, styles}: {text: string, styles?: React.CSSProperties}) {
  return (
    <span className="text-md text-text-white font-bold" style={styles}>
      {text}
    </span>
  )
}
export default WhiteText