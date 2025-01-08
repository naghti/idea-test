import RoundButton from "@/UI/RoundButton"
import TaskInfoBlock from "@/UI/TaskInfoBlock"
import Image from "../assets/icons/edit.svg"
import { TaskI } from "@/types/task"
import { formatDateStr } from "@/utils/formDate"
import { useState } from "react"
import TaskAdd from "./TaskAdd"
import { Draggable } from "react-beautiful-dnd";

function Task({data}: {data: TaskI}) {
  const [isChange, setIsChange] = useState(false)
  const dataIsOut = data.endDay < Date.now()

  if (isChange) return (
    <TaskAdd 
      closeWindow={() => setIsChange(false)} 
      type={data.type}
      data={data}
    />
  )
  return (
    <div className="bg-white/10 p-4 grid gap-3">
      <div className="grid grid-cols-1 gap-2">
        <TaskInfoBlock text1="Начало:" text2={formatDateStr(data.startDay)}/>
        <TaskInfoBlock text1="Окончание:" text2={formatDateStr(data.endDay)} text2Red={dataIsOut}/>
        <TaskInfoBlock text1="Описание:" text2={data.text}/>
      </div>

      <div className="flex justify-end">
        <RoundButton Image={Image} onClick={() => setIsChange(true)}/>
      </div>
    </div>
  )
}

export default Task