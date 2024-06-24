import React, {memo, useState} from 'react';
import {Handle, Position} from 'reactflow';
import {IconButton} from "@mui/joy";
import {CancelOutlined, CheckCircleOutlined, Visibility} from "@mui/icons-material";

//TODO odmazat console.log ale všude !
//TODO odmazat unused importy ale taky všude!
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

    function getPosition(stringPosition) {
        if (stringPosition === "BOTTOM")
            return Position.Bottom
        if (stringPosition === "TOP")
            return Position.Top
        if (stringPosition === "LEFT")
            return Position.Left
        if (stringPosition === "RIGHT")
            return Position.Right
    }

    let source;
    if (data.source)
        source = <Handle type="source" position={getPosition(data.sourcePosition)}/>

    let target;
    if (data.target)
        target = <Handle type="target" position={getPosition(data.targetPosition)}/>

    return (
        <>
            <IconButton sx={{width: data.width, border: "2px solid"}} onClick={() =>handleClick()} color={color} type="submit">{icon}</IconButton>
            {source}
            {target}
        </>
    );
})