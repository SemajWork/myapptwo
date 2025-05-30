import React from 'react'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props){
    const {isOver, setNodeRef}= useDroppable({
        id,
    });
    const style={
        color: isOver ? 'green' : undefined,
    };


return(
    <div ref={setNodeRef} style={style}>
        {props.children}
    </div>
    );
}