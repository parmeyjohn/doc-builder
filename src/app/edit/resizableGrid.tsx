import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useState } from "react";

export function ResizableGrid() {
    //const [rows, setRows] = useState(2);
    //const [cols, setCols] = useState(2);

    return (

        <ResizablePanelGroup
            direction="vertical"
            className="max-w-md rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                    <ResizablePanel></ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel></ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel ></ResizablePanel>

                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-md rounded-lg border md:min-w-[450px]"
                >
                    <ResizablePanel defaultSize={75}></ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={25}></ResizablePanel>

                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33}></ResizablePanel>
            {/* <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                </div>
            </ResizablePanel>
            
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel> */}
        </ResizablePanelGroup>
    )
}