import React, {memo, useState} from 'react';
import {Handle, Position, useReactFlow, useStore} from 'reactflow';
import {Input} from "@mui/joy";
import {CheckCircle, Visibility} from "@mui/icons-material";

export default memo(({data, id}) => {

    const {setNodes} = useReactFlow();

    const result = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return node.data.value
    });

    let [inputData, setInputData] = useState()


    const handleIconChange = event => {
        setInputData(data.result)
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === id) {
                    node.data.value = data.result
                }
                return node;
            })
        );
        setColor("success")
        setIcon(<CheckCircle style={{color: 'green'}}/>)
    }


    let [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined"/>)
    let [color, setColor] = useState("primary")

    if (data.value !== undefined) {
        inputData = data.value
        if (data.value === data.result) {
            color = "success"
            icon = <CheckCircle style={{color: 'green'}}/>
        } else {
            color = "danger"
            icon = <Visibility onClick={handleIconChange} color="outlined"/>
        }
    }


    const handleOnChange = event => {
        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join(''))

        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === id) {
                    node.data.value = inputData
                }
                return node;
            })
        );


        if (data.result === inputData) {
            setColor("success")
            setIcon(<CheckCircle style={{color: 'green'}}/>)
        } else if (inputData === "") {
            setColor("primary")
            setIcon(<Visibility onClick={handleIconChange} color="outlined"/>)
        } else {
            setColor("danger")
            setIcon(<Visibility onClick={handleIconChange} color="outlined"/>)
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
        </>
    );
})