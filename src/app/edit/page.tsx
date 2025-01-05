'use client'
import { ResizableGrid } from './resizableGrid';

export default function Edit({ }) {
    //const [isDropped, setIsDropped] = useState(false);

    return (
        <div className="w-full h-full flex flex-wrap gap-16 p-8">
            <ResizableGrid></ResizableGrid>
        </div>
    );

}
