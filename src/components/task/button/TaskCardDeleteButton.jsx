import React from 'react'

export const TaskCardDeleteButton = ({taskCardsList,setTaskCardsList,taskCard}) => {

  const taskCardDeleteButton = (id) => {
    //タスクカードを削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  }
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}><i className="fa-solid fa-xmark"></i></button>
      </div>
  )
}
