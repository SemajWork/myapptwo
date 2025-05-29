import React from 'react'
import './Task.css'
import {useSortable} from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
export const Task = ({id, onRemove,title}) => {
  const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({id: id});
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

  return (
    <div className="task" ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <input type="checkbox" className="checkbox" name="task-checkbox"></input>
        {title}
        <button onClick={(e)=>{onRemove(id);}} className="remove-button">X</button>
    </div>
  );
};
