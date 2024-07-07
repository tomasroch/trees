import React, {memo, useState} from 'react';
import {Handle, Position} from 'reactflow';
import {IconButton} from "@mui/joy";
import {CancelOutlined, CheckCircleOutlined, Visibility} from "@mui/icons-material";

export default memo(({data, id}) => {

    let [color, setColor] = useState("primary")
    let [icon, setIcon] = useState(<Visibility />)

    const handleClick = event => {
        if (color !== "primary"){
            setColor("primary")
            setIcon(<Visibility />)
        } else if (data.result){
            setColor("success")
            setIcon(<CheckCircleOutlined />)
        } else {
            setColor("danger")
            setIcon(<CancelOutlined />)
        }
    }
    
    return (
        <>
            <IconButton sx={{width: data.width, border: "2px solid"}} onClick={() =>handleClick()} color={color} type="submit">{icon}</IconButton>
            <Handle type="source" position={Position.Top} id="a" />
            <Handle type="source" position={Position.Right} id="b" />
            <Handle type="source" position={Position.Bottom} id="c" />
            <Handle type="source" position={Position.Left} id="d" />
        </>
    );
})