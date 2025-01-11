import DeleteButton from "@/components/DeleteButton"
import Task from "@/components/Task"
import TaskAdd from "@/components/TaskAdd"
import { tasksTemplate } from "@/consts/tasks"
import { useAppSelector } from "@/hooks/redux"
import { useSetTypeTask } from "@/hooks/TaskHelpers"
import { BoardI } from "@/types/board"
import { TaskI } from "@/types/task"
import GrayText from "@/UI/GrayText"
import LightIcon from "@/UI/LightIcon"
import WhiteText from "@/UI/WhiteText"
import filterFunction from "@/utils/filterFuntion"
import { useEffect, useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { useDrop } from "react-dnd"

function Board({data}: {data:BoardI}) {
  const setTypeF = useSetTypeTask()
  const filterF = filterFunction()
  const [showAddTask, setShowAddTask] = useState(false)
  const {tasks} = useAppSelector(state => state.taskReducer)
  let currentTasks = tasks.filter(task => task.type === data.type)
  let filteredTasks = currentTasks.filter(filterF)

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Task",
    drop: () => ({ 
      function: setTypeF,
      name: "setType",
      type: data.type
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver

  return (
    <div className={"flex flex-col px-4 pt-4 pb-8 bg-black/70 rounded-md " + (isActive && "shadow-2xl shadow-blue-400/20")}>
      <div className="flex justify-between items-center mb-4 min-h-24">
        <div className="grid grid-flow-col items-center gap-3">
          <LightIcon image={data.image} />
          <WhiteText text={data.name} styles={{fontSize: 34}}/>
        </div>
        {data.addButton && <GrayText text="+Добавить" onClick={() => setShowAddTask(!showAddTask)}/>}
        {data.basketButton && <DeleteButton/>}
      </div>

      <div className="h-full" ref={drop}>
        <div className="grid grid-cols-1 gap-4">
          {showAddTask && 
            <TaskAdd 
              type={data.type}
              closeWindow={() => setShowAddTask(false)}
            />
          }
          {filteredTasks.map((task, index) => (
            <Task data={task} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Board