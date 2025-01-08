import RoundButton from "@/UI/RoundButton"
import TaskInfoBlock from "@/UI/TaskInfoBlock"
import ImageCheck from "../assets/icons/check.svg"
import ImageCross from "../assets/icons/cross.svg"
import { TaskI } from "@/types/task"
import { formatDateNumber, formatDateStr } from "@/utils/formDate"
import TaskChangeBlock from "@/UI/TaskChangeBlock"
import { tasksTemplate } from "@/consts/tasks"
import { BoardTypes } from "@/types/board"
import { useState } from "react"
import { useAddTask, useEditTask } from "@/hooks/TaskHelpers"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { taskSLice } from "@/store/reducers/TaskSlice"

function TaskAdd({
  closeWindow,
  type,
  data
}: {
  closeWindow: () => void, 
  type: BoardTypes,
  data?: TaskI
}) {
  const addTaskF = useAddTask()
  const editTaskF = useEditTask()
  
  const [formData, setFormData] = useState({
    id: data?.id || Date.now(),
    endDay: formatDateStr(data?.endDay) || formatDateStr(Date.now()),
    startDay: formatDateStr(data?.startDay) || formatDateStr(Date.now()),
    text: data?.text || "Описание...",
    type
  })
  
  const setStartDay = (val: string) => setFormData({...formData, startDay: val})
  const setEndDay = (val: string) => setFormData({...formData, endDay: val})
  const setText = (val: string) => setFormData({...formData, text: val})

  const rebuildData = () => {
    const newEndDay = new Date(formData.endDay).getTime() || Date.now()
    const newStartDay = new Date(formData.startDay).getTime() || Date.now()
    const newFormData = {...formData, endDay: newEndDay, startDay: newStartDay}

    return newFormData
  }
  
  const uploadTask = () => {
    const newFormData = rebuildData() 

    if (data) editTaskF(newFormData)
    else addTaskF(newFormData)

    closeWindow()
  }

  return (
    <div className="bg-white/10 p-4 grid gap-3">
      <div className="grid grid-cols-1 gap-2">
        <TaskChangeBlock 
          text1="Начало:" 
          text2={formData.startDay}
          changeF={setStartDay}
        />
        <TaskChangeBlock 
          text1="Окончание:" 
          text2={formData.endDay}
          changeF={setEndDay}
        />
        <TaskChangeBlock 
          text1="Описание:" 
          text2={formData.text}
          changeF={setText}
        />
      </div>

      <div className="grid grid-flow-col justify-end gap-3">
        <RoundButton Image={ImageCheck} onClick={uploadTask}/>
        <RoundButton Image={ImageCross} color="rgba(1, 132, 207, 1)" onClick={() => closeWindow()}/>
      </div>
    </div>
  )
}

export default TaskAdd