import React, {memo, useState} from 'react';
import {Handle, Position, useReactFlow, useStore} from 'reactflow';
import {Input} from "@mui/joy";

export default memo(({ data, id }) => {
    const { setNodes } = useReactFlow();

    const result = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return node.data.result
    });

    const processing = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return node.data.processing
    });

    const processed = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return node.data.processed
    });

    let [color, setColor] = useState("primary")


    if (data.processing)
        color = "warning"

    if (data.processed)
        color = "success"

    return (
        <>
            <Input sx={{width: data.width, border: '3px solid'}}
                   size="sm" placeholder={data.placeHolder} color={color} value={result}
            />
            <Handle type="target" position={Position.Top}/>
            <Handle type="source" position={Position.Bottom}/>
        </>
    );
})