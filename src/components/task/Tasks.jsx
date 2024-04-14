import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const Tasks = ({taskList,setTaskList}) => {
  const reorder = (taskList, startIndex, endIndex) => {
  // タスク並び替え
  const remove = taskList.splice(startIndex,1); // [1,2,3] -> [2,3]
  taskList.splice(endIndex, 0, remove[0]) // [2,3] -> [2,1,3]
  setTaskList(taskList);
  }

  const handleDragEnd = (result) => {
    if(result.destination){
      reorder(taskList,result.source.index,result.destination.index);
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided)=> (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {taskList.map((task,index)=>(
            <div key={task.id}>
            <Task 
              index={index}
              task={task} 
              taskList={taskList} 
              setTaskList={setTaskList}
            />
          </div>
        ))}
        {provided.placeholder}
        </div>
        )}
      </Droppable>
      </DragDropContext>
      </div>
  )
}