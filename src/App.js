/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { TaskContextProvider } from './TaskContext';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  return (

    <div className="App">
      <TaskContextProvider>
        <TaskCreate />
        <h1>Görevler</h1>
        <TaskList />
      </TaskContextProvider>
    </div>

  );
}

export default App;
