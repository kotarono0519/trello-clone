import React, { useState } from 'react';
import TaskCardTitle from './TaskCardTitle';
import TaskCardDeleteBUtton from './button/TaskCardDeketeButton';
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard( {taskCardsList, setTaskCardsList, taskCard, index} ) {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
            <div 
              className='taskCard' 
              ref={provided.innerRef}
              {...provided.draggableProps}
             >
            <div 
              className='taskCardTitleAndTaskCardDeleyeButtonArea'
              {...provided.dragHandleProps}
            >
            <TaskCardTitle />
            <TaskCardDeleteBUtton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard} 
            />
            </div>
            <TaskAddInput 
              inputText={inputText} 
              setInputText={setInputText}
              taskList={taskList}
              setTaskList={setTaskList}
              />
            <Tasks 
              inputText={inputText} 
              setInputText={setInputText}
              taskList={taskList}
              setTaskList={setTaskList}
              />
          </div>
      )}
    </Draggable>
  )
};

export default TaskCard;
