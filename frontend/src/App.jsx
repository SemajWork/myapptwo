import {React,useState, useEffect} from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import Column from '../component/column/Column';
import './App.css'
export const App = () => {
  const [tasks, setTasks] = useState(()=>{
  const saved = localStorage.getItem("Tasks")
    if(saved!=="undefined"){
      return saved ? JSON.parse(saved) : [];
    }else{
      return [];
    }
  });
  useEffect(()=>{
    const savedobj = JSON.stringify(tasks);
    localStorage.setItem("Tasks",savedobj);
  },[tasks]);
  const [input , setInput] = useState('')
  function handleUserInput(event){
    setInput(event.target.value)
  }
  function AddTask(){
    if(input.trim() !== ""){
      setTasks(t=>[...t,{id: Date.now(), title:input}])
      setInput('')
    }
  }
  function clearTasks(){
    window.localStorage.clear();
    window.location.reload();
  }
  function removeTask(id){
    setTasks(tasks=>tasks.filter((t)=>t.id !== id));
  }
  const sensors = useSensors(
    useSensor(PointerSensor)
  )
  function handleDragEnd(event){
        const {active,over} = event;
  
        if(active.id!==over.id){
          setTasks((items)=>{
            const oldIndex = items.findIndex(task => task.id === active.id);
            const newIndex = items.findIndex(task => task.id === over.id);
            return arrayMove(items, oldIndex, newIndex);
          })
        }
  }
  return (
    <div className="App">
      <h1 className="completed-tasks">Completed Tasks</h1>
      <h1>To Do List 📋</h1>
      <input 
      placeholder="Enter tasks..."
      className="task-input-field"
      type="text"
      value={input}
      name="task-input"
      onChange={handleUserInput}
      onKeyDown={e=>{
        if(e.key==="Enter") AddTask();
      }}
      />
      <button onClick={AddTask}>Add</button>
      <button onClick={clearTasks}>Clear Tasks</button>
      <button onClick>Select All</button>
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <Column tasks={tasks} onRemoveTask={removeTask}></Column>
      </DndContext>
    </div>
  )
}
