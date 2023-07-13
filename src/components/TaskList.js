import TaskShow from './TaskShow';
import {useContext} from 'react';
import { TaskContext} from '../TaskContext';
function TaskList() {
  const { tasks ,deleteTaskById,editTaskById} = useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={deleteTaskById}
            onUpdate={editTaskById}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
