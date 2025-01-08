import GrayText from "./GrayText"
import InputTask from "./InputTask"

type Props = {
  text1: string, 
  text2: string,
  changeF: (str: string) => void
}

function TaskChangeBlock({text1, text2, changeF}: Props) {
  return (
    <div className="flex items-center flex-wrap">
      <GrayText
        text={text1} 
        styles={{margin: 10}}
      />
      <InputTask
        value={text2}
        onChange={(e) => changeF(e.target.value)}
      /> 
    </div>
    )
}

export default TaskChangeBlock