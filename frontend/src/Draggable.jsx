import React from 'react'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props){
    const {attributes, listeners, setNodeRef,transform} = useDraggable({
        id,
    });
    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return(
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    )
}