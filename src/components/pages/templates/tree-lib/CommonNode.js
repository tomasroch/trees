import React, {useState} from 'react';
import {Handle, Position} from 'reactflow';
import {Input} from "@mui/joy";
import {CheckCircle, Visibility} from "@mui/icons-material";

export default function CommonNode({ data, id })  {
    const [inputData, setInputData] = useState()
    const handleIconChange = event => {
        setInputData(data.result)
        setColor("success")
        setIcon(<CheckCircle style={{ color: 'green' }} />)
    }


    const [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined" />)
    const [color, setColor] = useState("primary")


    const handleOnChange = event => {
        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join(''))

        if (data.result === inputData){
            setColor("success")
            setIcon(<CheckCircle style={{ color: 'green' }} />)
        }
        else if (inputData === ""){
            setColor("primary")
            setIcon(<Visibility onClick={handleIconChange} color="outlined" />)
        }
        else{
            setColor("danger")
            setIcon(<Visibility onClick={handleIconChange} color="outlined" />)
        }

    }

    return (
        <>
            <Input sx={{width: data.width}}
                   size="sm" placeholder={data.placeHolder} color={color} onChange={handleOnChange} value={inputData}
                   endDecorator={icon}
            />
            <Handle type="target" position={Position.Top}/>
            <Handle type="source" position={Position.Bottom}/>

            {/*<Typography>{id}</Typography>*/}
        </>
    );
}