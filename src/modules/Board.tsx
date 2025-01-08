import Task from "@/components/Task"
import TaskAdd from "@/components/TaskAdd"
import { tasksTemplate } from "@/consts/tasks"
import { useAppSelector } from "@/hooks/redux"
import { BoardI } from "@/types/board"
import { TaskI } from "@/types/task"
import GrayText from "@/UI/GrayText"
import WhiteText from "@/UI/WhiteText"
import filterFunction from "@/utils/filterFuntion"
import { useEffect, useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"

function Board({data}: {data:BoardI}) {
  const [showAddTask, setShowAddTask] = useState(false)
  const {tasks} = useAppSelector(state => state.taskReducer)
  let currentTasks = tasks.filter(task => task.type === data.type)
  // let filteredTasks = currentTasks.filter(filterFunction)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(currentTasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

  };

  return (
    <div className="px-4 py-8 bg-black/70 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <WhiteText text={data.name} styles={{fontSize: 34}}/>
        <GrayText text="+Добавить" onClick={() => setShowAddTask(!showAddTask)}/>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={data.type}>
          {(provided) => (
            <div className="grid grid-cols-1 gap-4">
              {showAddTask && 
                <TaskAdd 
                  type={data.type}
                  closeWindow={() => setShowAddTask(false)}
                />
              }
              {currentTasks.map((task) => (
                 <Draggable key={task.id} draggableId={task.id.toString()} index={task.id}>
                    {(provided) => (   
                    <div 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task data={task} />
                    </div>                    
                    )}
                 </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  )
}

export default Board