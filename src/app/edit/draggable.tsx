import { useDraggable } from '@dnd-kit/core';

export default function Draggable() {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <button className='w-20 h-20 bg-red-900' ref={setNodeRef} style={style} {...listeners} {...attributes}>
            Drag
        </button>
    );
}