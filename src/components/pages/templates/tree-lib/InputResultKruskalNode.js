import React, {useState} from 'react';
import {FormControl, FormLabel, Input} from "@mui/joy";
import {CheckCircle, Visibility} from "@mui/icons-material";
import {useReactFlow} from "reactflow";

export default function InputResultKruskalNode({ data, id })  {
    const {setEdges} = useReactFlow();

    const [inputData, setInputData] = useState()
    const handleIconChange = event => {
        setInputData(data.result)
        setColor("success")
        setIcon(<CheckCircle style={{ color: 'green' }} />)
        animateEdges(data.result)
    }

    function animateEdges(data){
        let edges = data.split(',')
        for(var i = 0; i < edges.length; i++) {
            // Trim the excess whitespace.
            edges[i] = edges[i].replace(/^\s*/, "").replace(/\s*$/, "");
            setEdges((nds) =>
                nds.map((edge) => {
                    if (edge.id === edges[i]) {
                        edge.animated= true
                    }
                    return edge;
                })
            );
        }
    }

    const handleOnChange = event => {
        let inputData = event.target.value;
        setInputData(inputData)
        inputData = (inputData.trim().split(/ +/).join(''))


        setEdges((nds) =>
            nds.map((edge) => {
                edge.animated= false
                return edge;
            })
        );
        animateEdges(inputData)


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


    const [icon, setIcon] = useState(<Visibility onClick={handleIconChange} color="outlined" />)
    const [color, setColor] = useState("primary")


    return (
        <>
            <FormControl sx={{mt: 2, mb: 1}}>
                <FormLabel>{data.label}</FormLabel>
                <Input sx={{width: data.width}}
                       size="sm" placeholder={data.placeHolder} color={color} onChange={handleOnChange} value={inputData} endDecorator={icon}
                />
            </FormControl>
        </>
    );
}