import React from 'react';
import { v4 as uuid } from 'uuid';

function TaskAddInput({ inputText, setInputText, taskList, setTaskList }) {
  const taskId = uuid();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === '') {
      return
    };
    setTaskList([...taskList, {
      id: taskId,
      draggableId: `task-${taskId}`,
      text: inputText,
    },
  ]);
    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='task'
          className='taskAddInput'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
}

export default TaskAddInput;

