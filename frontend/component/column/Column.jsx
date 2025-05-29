import React from 'react'
import { Task } from '../task/task';
import { useDroppable } from '@dnd-kit/core';
import "./Column.css"
import { SortableContext, verticalListSortingStrategy, useSortable} from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

export default function Column({tasks,onRemoveTask}) {
  

  return (
    
    <div className="column">
        <SortableContext items={tasks.map(task=>task.id)} strategy={verticalListSortingStrategy} removable handle>
        {tasks.map((task)=>(
            <Task id={task.id} title={task.title} key={task.id} onRemove={onRemoveTask}/>
        ))}
        </SortableContext>
    </div>
  )
}