import { formatDateStr } from "@/utils/formDate"
import GrayText from "./GrayText"
import WhiteText from "./WhiteText"
import RedText from "./RedText"

function TaskInfoBlock({text1, text2, text2Red}: {text1: string, text2: string, text2Red?: boolean}) {
  return (
  <div className="flex items-center flex-wrap">
    <GrayText 
      text={text1} 
      styles={{margin: 10}}
    />
    {
      text2Red 
      ?
      <RedText
        text={text2} 
        styles={{fontSize: 14}}
      /> 
      :
      <WhiteText 
        text={text2} 
        styles={{fontSize: 14}}
      />
    }
  </div>
  )
}

export default TaskInfoBlock