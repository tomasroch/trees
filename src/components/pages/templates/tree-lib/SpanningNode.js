import React, {memo, useState} from 'react';
import {Handle, Position, useReactFlow} from 'reactflow';
import {IconButton, Input} from "@mui/joy";

//TODO odmazat console.log ale všude !
//TODO odmazat unused importy ale taky všude!
export default memo(({data, id}) => {
    let [color, setColor] = useState("primary")

    return (
        <>
            <Input sx={{width: data.width, height: data.width, border: '3px solid', fontWeight:"bold"}}
                   size="sm" color={color} value={id}
            />
            <Handle type="source" position={Position.Top} id="a" />
            <Handle type="source" position={Position.Right} id="b" />
            <Handle type="source" position={Position.Bottom} id="c" />
            <Handle type="source" position={Position.Left} id="d" />
        </>
    );
})