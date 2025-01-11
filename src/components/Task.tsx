import RoundButton from "@/UI/RoundButton"
import TaskInfoBlock from "@/UI/TaskInfoBlock"
import Image from "../assets/icons/edit.svg"
import { TaskI } from "@/types/task"
import { formatDateStr } from "@/utils/formDate"
import { useState } from "react"
import TaskAdd from "./TaskAdd"
import { Draggable } from "react-beautiful-dnd";
import { useDrag } from "react-dnd"
import { useDeleteTask, useSetTypeTask } from "@/hooks/TaskHelpers"
import { BoardTypes } from "@/types/board"

interface DropResultDelete {
  function: ReturnType<typeof useDeleteTask>
  name: "delete"
}
interface DropResultSetType {
  function: ReturnType<typeof useSetTypeTask>,
  type: BoardTypes,
  name: "setType"
}

type DropResult = DropResultDelete | DropResultSetType

function Task({data}: {data: TaskI}) {
  const [isChange, setIsChange] = useState(false)
  const dataIsOut = data.endDay < Date.now()

  const dropF = (dropResult: DropResult) => {
    if (dropResult.name == "delete") dropResult.function(data.id)
    else if (dropResult.name == "setType") dropResult.function(data, dropResult.type)
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Task",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        dropF(dropResult)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  if (isChange) return (
    <TaskAdd 
      closeWindow={() => setIsChange(false)} 
      type={data.type}
      data={data}
    />
  )
  return (
    <div className="bg-white/10 p-4 grid gap-3" ref={drag}>
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