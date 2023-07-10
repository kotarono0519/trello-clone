import React from 'react';

const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className='taskCardDeleteButton'
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        削除
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
