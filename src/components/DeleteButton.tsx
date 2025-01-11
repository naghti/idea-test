import LightIcon from "@/UI/LightIcon"
import TrashIcon from "../assets/icons/trash.svg"
import { useDrop } from "react-dnd"
import { useDeleteAllDone, useDeleteTask } from "@/hooks/TaskHelpers"
import { taskSLice } from "@/store/reducers/TaskSlice"
import { useAppDispatch } from "@/hooks/redux"

function DeleteButton() {
  const {deleteTask} = taskSLice.actions
  const dispatch = useAppDispatch()
  const deleteF = useDeleteTask()
  const deleteAllDoneF = useDeleteAllDone()

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Task",
    drop: () => ({ 
      function: deleteF,
      name: "delete"
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div ref={drop} onClick={deleteAllDoneF}>
      <LightIcon image={TrashIcon} />
    </div>
  )
}

export default DeleteButton