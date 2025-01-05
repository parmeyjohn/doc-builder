import { useDroppable } from '@dnd-kit/core';

export default function Droppable() {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };


    return (
        <div ref={setNodeRef} style={style} className='w-80 h-80 bg-green-200'>
        </div>
    );
}